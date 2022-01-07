import { checkAddressExists as checkAddressExistsCore, Currency, getWithdrawals as getWithdrawalsCore } from '@tatumio/tatum-core'

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/addressExists" target="_blank">Tatum API documentation</a>
 */
export const checkAddressExists = async (address: string, index?: number) => {
  return checkAddressExistsCore(address, Currency.XLM, index)
}

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/GetWithdrawals" target="_blank">Tatum API documentation</a>
 */
export const getWithdrawals = async (status?: string, pageSize = 50, offset = 0) => {
  return getWithdrawalsCore(status, Currency.XLM, pageSize, offset)
}