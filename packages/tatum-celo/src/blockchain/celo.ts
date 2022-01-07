import { get, post, TransactionHash } from '@tatumio/tatum-core'
import BigNumber from 'bignumber.js'
import { Block, Transaction } from 'web3-eth'

/**
 * Broadcasts signed transaction to the Celo blockchain. <br>
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloBroadcast" target="_blank">Tatum API documentation</a>
 */
export const broadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> =>
  post(`/v3/celo/broadcast`, {
    txData,
    signatureId,
  })

/**
 * Returns a number of outgoing transactions for the address from Celo blockchain. <br>
 * When a transaction is sent, there can be multiple outgoing transactions, which are not yet processed by the blockchain.
 * To distinguish between them, there is a counter called a nonce, which represents the order of the transaction in the list of outgoing transactions.
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloGetTransactionCount" target="_blank">Tatum API documentation</a>
 */
export const getTransactionsCount = async (address: string): Promise<number> => get(`/v3/celo/transaction/count/${address}`)

/**
 * Returns information about Celo blockchain. <br>
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloGetCurrentBlock" target="_blank">Tatum API documentation</a>
 */
export const getCurrentBlock = async (): Promise<number> => get(`/v3/celo/block/current`)

/**
 * Returns block by its hash from Celo blockchain. <br>
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloGetBlock" target="_blank">Tatum API documentation</a>
 */
export const getBlock = async (hash: string): Promise<Block> => get(`/v3/celo/block/${hash}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloGetBalance" target="_blank">Tatum API documentation</a>
 */
export const getBlockchainAccountBalance = async (address: string): Promise<{ celo: BigNumber; cUsd: BigNumber }> => {
  return await get(`/v3/celo/account/balance/${address}`)
}

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/CeloGetTransaction" target="_blank">Tatum API documentation</a>
 */
export const getTransaction = async (hash: string): Promise<Transaction> => get(`/v3/celo/transaction/${hash}`)