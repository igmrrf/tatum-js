/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KlaytnEstimateGas = {
    /**
     * Sender address.
     */
    from: string;
    /**
     * Blockchain address to send assets
     */
    to: string;
    /**
     * Amount to be sent in KLAY.
     */
    amount: string;
    /**
     * Additional data, that can be passed to blockchain transaction as data property.
     */
    data?: string;
}
