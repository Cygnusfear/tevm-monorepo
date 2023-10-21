import { succeed } from 'effect/Effect'

/**
 * Merges multiple configs into a single config
 * The last config in the list takes precedence on any given property
 * @param {Array<import("./types.js").CompilerConfig>} configs
 * @returns {import("effect/Effect").Effect<never, never, import("./types.js").CompilerConfig>}
 * @example
 * const userConfig = { remappings: { key1: 'value1' }, libs: ['lib1'] };
 * const foundryConfig = { remappings: { key2: 'value2' }, libs: ['lib2', 'lib1'], foundryProject: 'forge' };
 * const mergedConfig = mergeConfigs([userConfig, foundryConfig]);
 */
export const mergeConfigs = (configs) =>
	succeed({
		remappings: Object.fromEntries(
			configs.flatMap((config) => Object.entries(config.remappings ?? {})),
		),
		foundryProject: configs
			.reverse()
			.find((config) => config.foundryProject !== undefined)?.foundryProject,
		libs: [...new Set(configs.flatMap((config) => config.libs ?? []))],
	})
