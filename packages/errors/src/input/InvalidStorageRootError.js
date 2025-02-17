import { InvalidParamsError } from '../ethereum/InvalidParamsError.js'

/**
 * Parameters for constructing an InvalidStorageRootError.
 * @typedef {Object} InvalidStorageRootErrorParameters
 * @property {string} [docsBaseUrl] - Base URL for the documentation.
 * @property {string} [docsPath] - Path to the documentation.
 * @property {string} [docsSlug] - Slug for the documentation.
 * @property {string[]} [metaMessages] - Additional meta messages.
 * @property {import('../ethereum/BaseError.js').BaseError|Error} [cause] - The cause of the error.
 * @property {string} [details] - Details of the error.
 * @property {object} [meta] - Optional object containing additional information about the error.
 */

/**
 * Represents an error that occurs when the storage root parameter is invalid.
 *
 * This error is typically encountered when a transaction or operation references a storage root parameter that is invalid or does not conform to the expected structure.
 *
 * @example
 * try {
 *   // Some operation that can throw an InvalidStorageRootError
 * } catch (error) {
 *   if (error instanceof InvalidStorageRootError) {
 *     console.error(error.message);
 *     // Handle the invalid storage root error
 *   }
 * }
 *
 * @param {string} message - A human-readable error message.
 * @param {InvalidStorageRootErrorParameters} [args={}] - Additional parameters for the InvalidStorageRootError.
 * @property {'InvalidStorageRootError'} _tag - Same as name, used internally.
 * @property {'InvalidStorageRootError'} name - The name of the error, used to discriminate errors.
 * @property {string} message - Human-readable error message.
 * @property {object} [meta] - Optional object containing additional information about the error.
 * @property {number} code - Error code, analogous to the code in JSON RPC error.
 * @property {string} docsPath - Path to the documentation for this error.
 * @property {string[]} [metaMessages] - Additional meta messages for more context.
 */
export class InvalidStorageRootError extends InvalidParamsError {
	/**
	 * Constructs an InvalidStorageRootError.
	 *
	 * @param {string} message - Human-readable error message.
	 * @param {InvalidStorageRootErrorParameters} [args={}] - Additional parameters for the InvalidStorageRootError.
	 * @param {string} [tag='InvalidStorageRootError'] - The tag for the error.
	 */
	constructor(message, args = {}, tag = 'InvalidStorageRootError') {
		super(
			message,
			{
				...args,
				docsBaseUrl: 'https://tevm.sh',
				docsPath: '/reference/tevm/errors/classes/invalidstoragerooterror/',
			},
			tag,
		)
	}
}
