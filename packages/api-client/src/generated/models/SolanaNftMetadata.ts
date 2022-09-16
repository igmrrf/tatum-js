/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SolanaNftMetadataCreator } from './SolanaNftMetadataCreator';

export type SolanaNftMetadata = {
    /**
     * Name of the NFT token.
     */
    name: string;
    /**
     * Symbol of the NFT token.
     */
    symbol: string;
    /**
     * Basis points of the seller fee.
     */
    sellerFeeBasisPoints: number;
    /**
     * Metadata of the token. See https://eips.ethereum.org/EIPS/eip-721#specification for more details.
     */
    uri: string;
    /**
     * The blockchain address of the NFT collection where the NFT will be minted in. Specify the private key of the collection verifier in the <code>collectionVerifierPrivateKey</code> parameter of the request body to get the NFT verified in the collection after the NFT has been minted. To know more about Solana collections and verification, refer to the <a href="https://docs.metaplex.com/programs/token-metadata/certified-collections" target="_blank">Solana user documentation</a>.
     */
    collection?: string;
    /**
     * If NFT metadata are mutable or not. Defaults to true.
     */
    mutable?: boolean;
    /**
     * Royalty receivers for NFT transfers.
     */
    creators?: Array<SolanaNftMetadataCreator>;
}