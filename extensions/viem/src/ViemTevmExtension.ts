import type { ViemTevmClientDecorator } from './ViemTevmClientDecorator.js'

/**
 * Creates a decorator to a viem wallet client that adds the `writeContractOptimistic` method to the `tevm` property.
 * This enables viem to optimistically update the tevm state before the transaction is mined.
 * @example
 * ```ts
 * import { tevmViemExtensionOptimistic } from 'tevmViemExtensionOptimistic'
 * import { walletClient } from './walletClient.js'
 *
 * const client = walletClient.extend(tevmViemExtensionOptimistic())
 *
 * for (const result of client.tevm.writeContractOptimistic({
 *   from: '0x...',
 *   to: '0x...',
 *   abi: [...],
 *   functionName: 'transferFrom',
 *   args: ['0x...', '0x...', '1000000000000000000'],
 * })) {
 *	if (result.tag === 'OPTIMISTIC_RESULT') {
 *		expect(result).toEqual({
 *			data: mockRequestResponse as any,
 *			success: true,
 *			tag: 'OPTIMISTIC_RESULT',
 *		})
 *		expect((client.request as jest.Mock).mock.lastCall[0]).toEqual({
 *			method: 'tevm_contract',
          params: params,
 *			jsonrpc: '2.0',
 *		})
 *		expect((client.writeContract as jest.Mock).mock.lastCall[0]).toEqual({
 *			abi: params.abi,
 *			functionName: params.functionName,
 *			args: params.args,
 *			caller: params.caller,
 *			address: params.address,
 *			account: params.account,
 *			chain: params.chain,
 *		})
 *	} else if (result.tag === 'HASH') {
 *		expect(result).toEqual({
 *			data: mockWriteContractResponse,
 *			success: true,
 *			tag: 'HASH',
 *		})
 *	} else if (result.tag === 'RECEIPT') {
 *		expect(result).toEqual({
 *			data: mockTxReciept,
 *			success: true,
 *			tag: 'RECEIPT',
 *		})
 *		expect(mockWaitForTransactionReceipt.mock.lastCall[0]).toEqual(client)
 *		expect(mockWaitForTransactionReceipt.mock.lastCall[1]).toEqual({
 *			hash: mockWriteContractResponse,
 *		})
 *	}
 * }
 */
export type ViemTevmExtension = () => ViemTevmClientDecorator
