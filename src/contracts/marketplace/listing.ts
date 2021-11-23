export const abi = [
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'feeRecipient',
                'type': 'address'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'ListingCancelled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'ListingCreated',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'buyer',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'ListingSold',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'buyAssetFromListing',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': 'buyer',
                'type': 'address'
            }
        ],
        'name': 'buyAssetFromListingForExternalBuyer',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'cancelListing',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            },
            {
                'internalType': 'bool',
                'name': 'isErc721',
                'type': 'bool'
            },
            {
                'internalType': 'address',
                'name': 'nftAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'seller',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'erc20Address',
                'type': 'address'
            }
        ],
        'name': 'createListing',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'string',
                'name': 'listingId',
                'type': 'string'
            }
        ],
        'name': 'getListing',
        'outputs': [
            {
                'components': [
                    {
                        'internalType': 'string',
                        'name': 'listingId',
                        'type': 'string'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isErc721',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'enum MarketplaceListing.State',
                        'name': 'state',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'nftAddress',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'seller',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'erc20Address',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'amount',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'price',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'buyer',
                        'type': 'address'
                    }
                ],
                'internalType': 'struct MarketplaceListing.Listing',
                'name': '',
                'type': 'tuple'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getMarketplaceFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'getMarketplaceFeeRecipient',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'fee',
                'type': 'uint256'
            }
        ],
        'name': 'setMarketplaceFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            }
        ],
        'name': 'setMarketplaceFeeRecipient',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
]
export const data = '0x60806040523480156200001157600080fd5b5060405162003065380380620030658339810160408190526200003491620000b9565b600062000040620000b5565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600291909155600380546001600160a01b0319166001600160a01b03909216919091179055620000f6565b3390565b60008060408385031215620000cc578182fd5b825160208401519092506001600160a01b0381168114620000eb578182fd5b809150509250929050565b612f5f80620001066000396000f3fe6080604052600436106100ec5760003560e01c80638da5cb5b1161008a57806399fbba611161005957806399fbba611461025e578063bc197c811461027e578063f23a6e611461029e578063f2fde38b146102be576100f3565b80638da5cb5b146101e95780638e8046ad146101fe5780639407ea981461021e578063943f22611461023e576100f3565b80634ae9ec30116100c65780634ae9ec30146101725780634ffa2be21461019f578063715018a6146101c157806389508b27146101d6576100f3565b8063150b7a02146100f85780631e2ea2a31461012e57806326a7b37b14610150576100f3565b366100f357005b600080fd5b34801561010457600080fd5b506101186101133660046122a8565b6102de565b6040516101259190612715565b60405180910390f35b34801561013a57600080fd5b5061014e6101493660046121bf565b6102ee565b005b34801561015c57600080fd5b50610165610358565b6040516101259190612dbf565b34801561017e57600080fd5b5061019261018d366004612395565b61035e565b6040516101259190612cfe565b3480156101ab57600080fd5b506101b46104e5565b6040516101259190612672565b3480156101cd57600080fd5b5061014e6104f4565b61014e6101e43660046123d0565b61057d565b3480156101f557600080fd5b506101b4610e45565b34801561020a57600080fd5b5061014e610219366004612420565b610e54565b34801561022a57600080fd5b5061014e610239366004612527565b611600565b34801561024a57600080fd5b5061014e610259366004612395565b611644565b34801561026a57600080fd5b5061014e610279366004612482565b611aa9565b34801561028a57600080fd5b506101186102993660046121fe565b611e5e565b3480156102aa57600080fd5b506101186102b9366004612312565b611e6f565b3480156102ca57600080fd5b5061014e6102d93660046121bf565b611e80565b630a85bd0160e11b949350505050565b6102f6611f40565b6001600160a01b0316610307610e45565b6001600160a01b0316146103365760405162461bcd60e51b815260040161032d90612a9c565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60025490565b610366611fe5565b60018260405161037691906125b8565b9081526020016040518091039020604051806101400160405290816000820180546103a090612e9c565b80601f01602080910402602001604051908101604052809291908181526020018280546103cc90612e9c565b80156104195780601f106103ee57610100808354040283529160200191610419565b820191906000526020600020905b8154815290600101906020018083116103fc57829003601f168201915b5050509183525050600182015460ff8082161515602084015260409092019161010090910416600281111561045e57634e487b7160e01b600052602160045260246000fd5b600281111561047d57634e487b7160e01b600052602160045260246000fd5b815260018201546201000090046001600160a01b03908116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e09091015292915050565b6003546001600160a01b031690565b6104fc611f40565b6001600160a01b031661050d610e45565b6001600160a01b0316146105335760405162461bcd60e51b815260040161032d90612a9c565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600060018360405161058f91906125b8565b9081526020016040518091039020604051806101400160405290816000820180546105b990612e9c565b80601f01602080910402602001604051908101604052809291908181526020018280546105e590612e9c565b80156106325780601f1061060757610100808354040283529160200191610632565b820191906000526020600020905b81548152906001019060200180831161061557829003601f168201915b5050509183525050600182015460ff8082161515602084015260409092019161010090910416600281111561067757634e487b7160e01b600052602160045260246000fd5b600281111561069657634e487b7160e01b600052602160045260246000fd5b815260018201546001600160a01b03620100009091048116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e090910152905060008160400151600281111561072057634e487b7160e01b600052602160045260246000fd5b1461074d573415610735576107353334611f44565b60405162461bcd60e51b815260040161032d90612ad1565b80602001511561081857606081015160c08201516040516331a9108f60e11b815230926001600160a01b031691636352211e9161078d9190600401612dbf565b60206040518083038186803b1580156107a557600080fd5b505afa1580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd91906121e2565b6001600160a01b0316146108135734156107fb576107fb3334611f44565b60405162461bcd60e51b815260040161032d90612a0b565b6108d0565b8060e0015181606001516001600160a01b031662fdd58e308460c001516040518363ffffffff1660e01b81526004016108529291906126fc565b60206040518083038186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a2919061253f565b10156108d05734156108b8576108b83334611f44565b60405162461bcd60e51b815260040161032d90612c5e565b816001600160a01b03168160a001516001600160a01b0316146109155734156108fd576108fd3334611f44565b60405162461bcd60e51b815260040161032d90612b15565b600061271060025483610100015161092d9190612e36565b6109379190612e16565b60016040848101829052336101208601525191925083916109599087906125b8565b90815260200160405180910390206000820151816000019080519060200190610983929190612039565b50602082015160018201805460ff1916911515919091178082556040840151919061ff0019166101008360028111156109cc57634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a080850151600385018054841691851691909117905560c0850151600485015560e0850151600585015561010085015160068501556101209094015160079093018054909116928216929092179091559083015116610b2c573481836101000151610a879190612dfe565b1115610ab5573415610a9d57610a9d3334611f44565b60405162461bcd60e51b815260040161032d90612bca565b600354610acb906001600160a01b031682611f44565b610ade8260800151836101000151611f44565b60008183610100015134610af29190612e55565b610afc9190612e55565b1115610b2757610b27338284610100015134610b189190612e55565b610b229190612e55565b611f44565b610d13565b60a0820151604051636eb1769f60e11b81526001600160a01b0382169063dd62ed3e90610b5f9033903090600401612686565b60206040518083038186803b158015610b7757600080fd5b505afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf919061253f565b82846101000151610bc09190612dfe565b1115610bee573415610bd657610bd63334611f44565b60405162461bcd60e51b815260040161032d906127d2565b6003546040516323b872dd60e01b81526001600160a01b03808416926323b872dd92610c22923392169087906004016126a0565b602060405180830381600087803b158015610c3c57600080fd5b505af1158015610c50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c749190612379565b5060808301516101008401516040516323b872dd60e01b81526001600160a01b038416926323b872dd92610cae92339291906004016126a0565b602060405180830381600087803b158015610cc857600080fd5b505af1158015610cdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d009190612379565b503415610d1157610d113334611f44565b505b816020015115610d8d57606082015160c0830151604051632142170760e11b81526001600160a01b03909216916342842e0e91610d5691309133916004016126a0565b600060405180830381600087803b158015610d7057600080fd5b505af1158015610d84573d6000803e3d6000fd5b50505050610dfe565b81606001516001600160a01b031663f242432a30338560c001518660e001516040518563ffffffff1660e01b8152600401610dcb94939291906126c4565b600060405180830381600087803b158015610de557600080fd5b505af1158015610df9573d6000803e3d6000fd5b505050505b336001600160a01b03167f12994827880427dc503009ab425d2a198242070528bfbe9aa01f9db9a4f9b62c85604051610e37919061272a565b60405180910390a250505050565b6000546001600160a01b031690565b6000600184604051610e6691906125b8565b908152602001604051809103902060405180610140016040529081600082018054610e9090612e9c565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebc90612e9c565b8015610f095780601f10610ede57610100808354040283529160200191610f09565b820191906000526020600020905b815481529060010190602001808311610eec57829003601f168201915b5050509183525050600182015460ff80821615156020840152604090920191610100909104166002811115610f4e57634e487b7160e01b600052602160045260246000fd5b6002811115610f6d57634e487b7160e01b600052602160045260246000fd5b815260018201546001600160a01b03620100009091048116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e0909101529050600081604001516002811115610ff757634e487b7160e01b600052602160045260246000fd5b146110145760405162461bcd60e51b815260040161032d90612ad1565b8060200151156110cf57606081015160c08201516040516331a9108f60e11b815230926001600160a01b031691636352211e916110549190600401612dbf565b60206040518083038186803b15801561106c57600080fd5b505afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a491906121e2565b6001600160a01b0316146110ca5760405162461bcd60e51b815260040161032d90612a0b565b611177565b8060e0015181606001516001600160a01b031662fdd58e308460c001516040518363ffffffff1660e01b81526004016111099291906126fc565b60206040518083038186803b15801561112157600080fd5b505afa158015611135573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611159919061253f565b10156111775760405162461bcd60e51b815260040161032d90612c5e565b826001600160a01b03168160a001516001600160a01b0316146111ac5760405162461bcd60e51b815260040161032d90612b15565b60006127106002548361010001516111c49190612e36565b6111ce9190612e16565b600160408481018290526001600160a01b0386166101208601525191925083916111f99088906125b8565b90815260200160405180910390206000820151816000019080519060200190611223929190612039565b50602082015160018201805460ff1916911515919091178082556040840151919061ff00191661010083600281111561126c57634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a080850151600385018054841691851691909117905560c085015160048086019190915560e086015160058601556101008601516006860155610120909501516007909401805490921693831693909317905590840151604051636eb1769f60e11b815290929183169163dd62ed3e9161133a918891309101612686565b60206040518083038186803b15801561135257600080fd5b505afa158015611366573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138a919061253f565b8284610100015161139b9190612dfe565b11156113b95760405162461bcd60e51b815260040161032d906127d2565b6003546040516323b872dd60e01b81526001600160a01b03808416926323b872dd926113ed928992169087906004016126a0565b602060405180830381600087803b15801561140757600080fd5b505af115801561141b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143f9190612379565b5060808301516101008401516040516323b872dd60e01b81526001600160a01b038416926323b872dd9261147992899291906004016126a0565b602060405180830381600087803b15801561149357600080fd5b505af11580156114a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cb9190612379565b5082602001511561154657606083015160c0840151604051632142170760e11b81526001600160a01b03909216916342842e0e9161150f91309189916004016126a0565b600060405180830381600087803b15801561152957600080fd5b505af115801561153d573d6000803e3d6000fd5b505050506115b7565b82606001516001600160a01b031663f242432a30868660c001518760e001516040518563ffffffff1660e01b815260040161158494939291906126c4565b600060405180830381600087803b15801561159e57600080fd5b505af11580156115b2573d6000803e3d6000fd5b505050505b836001600160a01b03167f12994827880427dc503009ab425d2a198242070528bfbe9aa01f9db9a4f9b62c876040516115f0919061272a565b60405180910390a2505050505050565b611608611f40565b6001600160a01b0316611619610e45565b6001600160a01b03161461163f5760405162461bcd60e51b815260040161032d90612a9c565b600255565b600060018260405161165691906125b8565b90815260200160405180910390206040518061014001604052908160008201805461168090612e9c565b80601f01602080910402602001604051908101604052809291908181526020018280546116ac90612e9c565b80156116f95780601f106116ce576101008083540402835291602001916116f9565b820191906000526020600020905b8154815290600101906020018083116116dc57829003601f168201915b5050509183525050600182015460ff8082161515602084015260409092019161010090910416600281111561173e57634e487b7160e01b600052602160045260246000fd5b600281111561175d57634e487b7160e01b600052602160045260246000fd5b815260018201546001600160a01b03620100009091048116602083015260028301548116604083015260038301548116606083015260048301546080830152600583015460a0830152600683015460c083015260079092015490911660e09091015290506000816040015160028111156117e757634e487b7160e01b600052602160045260246000fd5b146118045760405162461bcd60e51b815260040161032d90612875565b60808101516001600160a01b03163314806118375750611822610e45565b6001600160a01b0316336001600160a01b0316145b6118535760405162461bcd60e51b815260040161032d90612955565b60026040820181815250508060018360405161186f91906125b8565b90815260200160405180910390206000820151816000019080519060200190611899929190612039565b50602082015160018201805460ff1916911515919091178082556040840151919061ff0019166101008360028111156118e257634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a0840151600384018054831691841691909117905560c0840151600484015560e084015160058401556101008401516006840155610120909301516007909201805490931691161790556020810151156119f9576060810151608082015160c0830151604051632142170760e11b81526001600160a01b03909316926342842e0e926119c29230926004016126a0565b600060405180830381600087803b1580156119dc57600080fd5b505af11580156119f0573d6000803e3d6000fd5b50505050611a6e565b80606001516001600160a01b031663f242432a3083608001518460c001518560e001516040518563ffffffff1660e01b8152600401611a3b94939291906126c4565b600060405180830381600087803b158015611a5557600080fd5b505af1158015611a69573d6000803e3d6000fd5b505050505b7fff1b3c121274b35b78cfc6a06d69993757efa24b0a666779050b1266aade87c682604051611a9d919061272a565b60405180910390a15050565b87604051602001611aba91906125b8565b60405160208183030381529060405280519060200120600189604051611ae091906125b8565b90815260405160209181900382018120611afc929091016125d4565b604051602081830303815290604052805190602001201415611b305760405162461bcd60e51b815260040161032d90612c10565b86611be35760008211611b4257600080fd5b604051627eeac760e11b815282906001600160a01b0388169062fdd58e90611b709087908a906004016126fc565b60206040518083038186803b158015611b8857600080fd5b505afa158015611b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc0919061253f565b1015611bde5760405162461bcd60e51b815260040161032d90612775565b611c8f565b826001600160a01b0316866001600160a01b0316636352211e876040518263ffffffff1660e01b8152600401611c199190612dbf565b60206040518083038186803b158015611c3157600080fd5b505afa158015611c45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6991906121e2565b6001600160a01b031614611c8f5760405162461bcd60e51b815260040161032d906129c0565b6040805161014081018252898152881515602082015260008183018190526001600160a01b03808a1660608401528681166080840152841660a083015260c0820188905260e08201859052610100820187905261012082015290518190600190611cfa908c906125b8565b90815260200160405180910390206000820151816000019080519060200190611d24929190612039565b50602082015160018201805460ff1916911515919091178082556040840151919061ff001916610100836002811115611d6d57634e487b7160e01b600052602160045260246000fd5b0217905550606082015160018201805462010000600160b01b031916620100006001600160a01b039384160217905560808301516002830180546001600160a01b031990811692841692909217905560a0840151600384018054831691841691909117905560c0840151600484015560e08401516005840155610100840151600684015561012090930151600790920180549093169181169190911790915560405187918916908a1515907f1932d8cad10134abdff1561f8b46f011c019c5ac9aff20d267766f4a55b8528890611e4b908e9089908c908a9061273d565b60405180910390a4505050505050505050565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b611e88611f40565b6001600160a01b0316611e99610e45565b6001600160a01b031614611ebf5760405162461bcd60e51b815260040161032d90612a9c565b6001600160a01b038116611ee55760405162461bcd60e51b815260040161032d9061282f565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80471015611f645760405162461bcd60e51b815260040161032d9061291e565b6000826001600160a01b031682604051611f7d9061266f565b60006040518083038185875af1925050503d8060008114611fba576040519150601f19603f3d011682016040523d82523d6000602084013e611fbf565b606091505b5050905080611fe05760405162461bcd60e51b815260040161032d906128c1565b505050565b6040805161014081018252606081526000602082018190529091820190815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e09091015290565b82805461204590612e9c565b90600052602060002090601f01602090048101928261206757600085556120ad565b82601f1061208057805160ff19168380011785556120ad565b828001600101855582156120ad579182015b828111156120ad578251825591602001919060010190612092565b506120b99291506120bd565b5090565b5b808211156120b957600081556001016120be565b600082601f8301126120e2578081fd5b8135602067ffffffffffffffff8211156120fe576120fe612eed565b80820261210c828201612dc8565b838152828101908684018388018501891015612126578687fd5b8693505b8584101561214857803583526001939093019291840191840161212a565b50979650505050505050565b600082601f830112612164578081fd5b813567ffffffffffffffff81111561217e5761217e612eed565b612191601f8201601f1916602001612dc8565b8181528460208386010111156121a5578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156121d0578081fd5b81356121db81612f03565b9392505050565b6000602082840312156121f3578081fd5b81516121db81612f03565b600080600080600060a08688031215612215578081fd5b853561222081612f03565b9450602086013561223081612f03565b9350604086013567ffffffffffffffff8082111561224c578283fd5b61225889838a016120d2565b9450606088013591508082111561226d578283fd5b61227989838a016120d2565b9350608088013591508082111561228e578283fd5b5061229b88828901612154565b9150509295509295909350565b600080600080608085870312156122bd578384fd5b84356122c881612f03565b935060208501356122d881612f03565b925060408501359150606085013567ffffffffffffffff8111156122fa578182fd5b61230687828801612154565b91505092959194509250565b600080600080600060a08688031215612329578081fd5b853561233481612f03565b9450602086013561234481612f03565b93506040860135925060608601359150608086013567ffffffffffffffff81111561236d578182fd5b61229b88828901612154565b60006020828403121561238a578081fd5b81516121db81612f1b565b6000602082840312156123a6578081fd5b813567ffffffffffffffff8111156123bc578182fd5b6123c884828501612154565b949350505050565b600080604083850312156123e2578182fd5b823567ffffffffffffffff8111156123f8578283fd5b61240485828601612154565b925050602083013561241581612f03565b809150509250929050565b600080600060608486031215612434578283fd5b833567ffffffffffffffff81111561244a578384fd5b61245686828701612154565b935050602084013561246781612f03565b9150604084013561247781612f03565b809150509250925092565b600080600080600080600080610100898b03121561249e578586fd5b883567ffffffffffffffff8111156124b4578687fd5b6124c08b828c01612154565b98505060208901356124d181612f1b565b965060408901356124e181612f03565b9550606089013594506080890135935060a08901356124ff81612f03565b925060c0890135915060e089013561251681612f03565b809150509295985092959890939650565b600060208284031215612538578081fd5b5035919050565b600060208284031215612550578081fd5b5051919050565b6001600160a01b03169052565b15159052565b6003811061258857634e487b7160e01b600052602160045260246000fd5b9052565b600081518084526125a4816020860160208601612e6c565b601f01601f19169290920160200192915050565b600082516125ca818460208701612e6c565b9190910192915050565b81546000908190600281046001808316806125f057607f831692505b602080841082141561261057634e487b7160e01b87526022600452602487fd5b818015612624576001811461263557612661565b60ff19861689528489019650612661565b61263e8a612df2565b885b868110156126595781548b820152908501908301612640565b505084890196505b509498975050505050505050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b6000602082526121db602083018461258c565b600060808252612750608083018761258c565b60208301959095525060408101929092526001600160a01b0316606090910152919050565b60208082526038908201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660408201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606082015260800190565b6020808252603e908201527f496e73756666696369656e7420455243323020616c6c6f77616e63652062616c60408201527f616e636520666f7220706179696e6720666f72207468652061737365742e0000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602c908201527f4c697374696e67206973206e6f7420696e20494e49544941544544207374617460408201526b32971020b137b93a34b7339760a11b606082015260800190565b6020808252603a908201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260408201527f6563697069656e74206d61792068617665207265766572746564000000000000606082015260800190565b6020808252601d908201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604082015260600190565b60208082526045908201527f4c697374696e672063616e27742062652063616e63656c6c65642066726f6d2060408201527f6f74686572207468656e2073656c6c6572206f72206f776e65722e2041626f726060820152643a34b7339760d91b608082015260a00190565b6020808252602b908201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060408201526a3a34329030baba3437b91760a91b606082015260800190565b60208082526065908201527f4173736574206973206e6f74206f776e65642062792074686973206c6973746960408201527f6e672e2050726f6261626c7920776173206e6f742073656e7420746f2074686560608201527f20736d61727420636f6e74726163742c206f722077617320616c72656164792060808201526439b7b6321760d91b60a082015260c00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526024908201527f4c697374696e6720697320696e2077726f6e672073746174652e2041626f727460408201526334b7339760e11b606082015260800190565b60208082526083908201527f455243323020746f6b656e20616464726573732061732061207061796572206d60408201527f6574686f642073686f756c64206265207468652073616d6520617320696e207460608201527f6865206c697374696e672e20456974686572206c697374696e672c206f72206d60808201527f6574686f642063616c6c206861732077726f6e6720455243323020616464726560a08201526239b99760e91b60c082015260e00190565b60208082526026908201527f496e73756666696369656e74207072696365207061696420666f72207468652060408201526530b9b9b2ba1760d11b606082015260800190565b6020808252602e908201527f4c697374696e6720616c7265616479206578697374656420666f72206375727260408201526d195b9d081b1a5cdd1a5b99c8125960921b606082015260800190565b60208082526074908201527f496e73756666696369656e742062616c616e6365206f6620746865206173736560408201527f7420696e2074686973206c697374696e672e2050726f6261626c79207761732060608201527f6e6f742073656e7420746f2074686520736d61727420636f6e74726163742c2060808201527337b9103bb0b99030b63932b0b23c9039b7b6321760611b60a082015260c00190565b6000602082528251610140806020850152612d1d61016085018361258c565b91506020850151612d316040860182612564565b506040850151612d44606086018261256a565b506060850151612d576080860182612557565b506080850151612d6a60a0860182612557565b5060a0850151612d7d60c0860182612557565b5060c085015160e0858101919091528501516101008086019190915285015161012080860191909152850151612db582860182612557565b5090949350505050565b90815260200190565b60405181810167ffffffffffffffff81118282101715612dea57612dea612eed565b604052919050565b60009081526020902090565b60008219821115612e1157612e11612ed7565b500190565b600082612e3157634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612e5057612e50612ed7565b500290565b600082821015612e6757612e67612ed7565b500390565b60005b83811015612e87578181015183820152602001612e6f565b83811115612e96576000848401525b50505050565b600281046001821680612eb057607f821691505b60208210811415612ed157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612f1857600080fd5b50565b8015158114612f1857600080fdfea264697066735822122086209c19cffdc9ec4c0f21ede5a3fbb0ab561da568a096a39401fde7bb2a802264736f6c63430008000033';