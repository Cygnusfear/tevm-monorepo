import { blockNumberHandler } from '@tevm/actions'
import { numberToHex } from '@tevm/utils'

/**
 * @param {import('@tevm/node').TevmNode} client
 * @returns {import('./EthProcedure.js').EthBlockNumberJsonRpcProcedure}
 */
export const blockNumberProcedure = (client) => async (req) => ({
	...(req.id ? { id: req.id } : {}),
	jsonrpc: '2.0',
	method: req.method,
	result: await blockNumberHandler(client)({}).then(numberToHex),
})
