import { bundler, createCache } from '@evmts/base'
import { loadConfig } from '@evmts/config'
import { runSync } from 'effect/Effect'
import { existsSync, readFileSync } from 'fs'
import { readFile } from 'fs/promises'
import { createRequire } from 'module'
import { z } from 'zod'

const compilerOptionValidator = z.any().describe('Solc compiler to use')

/**
 * @typedef {import("zod").infer<typeof compilerOptionValidator>} CompilerOption
 */

const bundlers = {
	solc: bundler,
}

/**
 * @type {import("unplugin").UnpluginFactory<{solc: CompilerOption }, false>}
 */
export const evmtsUnplugin = (options) => {
	/**
	 * @type {import("@evmts/config").ResolvedCompilerConfig}
	 */
	let config

	// for current release we will hardcode this to solc
	const parsedCompilerOption = compilerOptionValidator.safeParse(options.solc)
	if (!parsedCompilerOption.success) {
		throw new Error(`Invalid solc compiler passed to EVMts plugin'`)
	}
	const compilerOption = parsedCompilerOption.data

	if (compilerOption === 'foundry') {
		throw new Error(
			'We have abandoned the foundry option despite supporting it in the past. Please use solc instead. Foundry will be added back as a compiler at a later time.',
		)
	}
	const bundler = bundlers.solc
	/**
	 * @type {ReturnType<typeof bundler>}
	 */
	let moduleResolver

	/**
	 * @type {import("@evmts/base").FileAccessObject}
	 */
	const fao = {
		existsSync,
		readFile,
		readFileSync,
	}

	const solcCache = createCache(console)

	return {
		name: '@evmts/rollup-plugin',
		enforce: 'pre',
		async buildStart() {
			config = runSync(loadConfig(process.cwd()))
			moduleResolver = bundler(config, console, fao, compilerOption, solcCache)
			this.addWatchFile('./tsconfig.json')
		},
		loadInclude: (id) => {
			return (
				id.endsWith('.sol') &&
				!existsSync(`${id}.ts`) &&
				!existsSync(`${id}.d.ts`)
			)
		},
		async resolveId(id, importer) {
			// to handle the case where the import is coming from a node_module or a different workspace
			// we need to always point @evmts/core to the local version
			if (
				id.startsWith('@evmts/core') &&
				!importer?.startsWith(process.cwd()) &&
				!importer?.includes('node_modules')
			) {
				return createRequire(`${process.cwd()}/`).resolve('@evmts/core')
			}
			return null
		},
		async load(id) {
			const resolveBytecode = id.endsWith('.s.sol')

			const { code, modules } = await moduleResolver.resolveEsmModule(
				id,
				process.cwd(),
				false,
				resolveBytecode,
			)
			Object.values(modules).forEach((module) => {
				if (module.id.includes('node_modules')) {
					return
				}
				this.addWatchFile(module.id)
			})
			return code
		},
		...{ version: '0.11.2' },
	}
}
