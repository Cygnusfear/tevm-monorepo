import { requestProcedure } from './requestProcedure.js'

/**
 * @param {import('@tevm/node').TevmNode} client
 * @returns {import('./tevm-request-handler/TevmJsonRpcBulkRequestHandler.js').TevmJsonRpcBulkRequestHandler}
 */
export const requestBulkProcedure = (client) => async (requests) => {
	const handleRequest = requestProcedure(client)
	const responses = await Promise.allSettled(requests.map((request) => handleRequest(/** @type any*/ (request))))
	return responses.map((response, i) => {
		const request = /** @type {import("@tevm/jsonrpc").JsonRpcRequest<string, object>} */ (requests[i])
		// this should never happen
		if (response.status === 'rejected') {
			client.logger.error(response.reason)
			return {
				id: request.id,
				method: request.method,
				jsonrpc: '2.0',
				error: {
					// TODO This should be added to @tevm/errors package and rexported in tevm
					code: 'UnexpectedBulkRequestError',
					message: 'UnexpectedBulkRequestError',
				},
			}
		}
		return response.value
	})
}
