import { type Server, createServer } from 'node:http'
import { Address } from '@ethereumjs/util'
import { optimism } from '@tevm/common'
import { ERC20 } from '@tevm/contract'
import { type MemoryClient, createMemoryClient } from '@tevm/memory-client'
import { createHttpHandler } from '@tevm/server'
import { transports } from '@tevm/test-utils'
import { http, type PublicClient, createPublicClient } from 'viem'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { tevmViemExtension } from './tevmViemExtension.js'

describe('tevmViemExtension', () => {
	let tevm: MemoryClient
	let server: Server
	let client: PublicClient

	beforeAll(async () => {
		tevm = createMemoryClient({
			common: optimism,
			fork: { transport: transports.optimism },
		})
		server = createServer(createHttpHandler(tevm)).listen(6420)
		client = createPublicClient({
			transport: http('http://localhost:6420', { timeout: 15_000 }),
		})
		await tevm.tevmReady()
	})

	afterAll(() => {
		server.close()
	})

	it('tevmRequest should call client.request and parse the response', async () => {
		const decorated = tevmViemExtension()(client)
		const params = { address: `0x${'77'.repeat(20)}`, balance: 420n } as const
		const response = await decorated.tevm.setAccount(params)

		expect(response.errors).toBe(undefined as any)
		expect((await (await tevm.tevm.getVm()).stateManager.getAccount(Address.fromString(params.address)))?.balance).toBe(
			420n,
		)
	})

	it(
		'runScript should call client.request with "tevm_script" and parse the response',
		async () => {
			const decorated = tevmViemExtension()(client)
			const params = {
				...ERC20.script({ constructorArgs: ['Name', 'SYMBOL'] }).read.balanceOf(`0x${'4'.repeat(40)}`),
			} as const
			const response = await decorated.tevm.contract(params)
			expect(response.executionGasUsed).toEqual(2851n)
			expect(response.rawData).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000')
			expect(response.data).toBe(0n)
		},
		{ timeout: 35_000 },
	)

	it('putAccount should call client.request with "tevm_putAccount" and parse the response', async () => {
		const decorated = tevmViemExtension()(client)
		const params = { balance: 420n, address: `0x${'88'.repeat(20)}` } as const
		const response = await decorated.tevm.setAccount(params)

		expect(response).not.toHaveProperty('errors')

		const account = await (await tevm.tevm.getVm()).stateManager.getAccount(Address.fromString(params.address))

		expect(account?.balance).toBe(420n)
	})
})
