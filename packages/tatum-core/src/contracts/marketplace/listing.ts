export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionBid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bool',
        name: 'isErc721',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endedAt',
        type: 'uint256',
      },
    ],
    name: 'AuctionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionSettled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bidValue',
        type: 'uint256',
      },
    ],
    name: 'bid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bidValue',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'bidder',
        type: 'address',
      },
    ],
    name: 'bidForExternalBidder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'cancelAuction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: 'isErc721',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endedAt',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
    ],
    name: 'createAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'getAuction',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nftAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isErc721',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'endedAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startedAt',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endingPrice',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'bidder',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'highestBid',
            type: 'uint256',
          },
        ],
        internalType: 'struct NftAuction.Auction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAuctionFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAuctionFeeRecipient',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'setAuctionFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'setAuctionFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
export const data =
  '608060405260006002553480156200001657600080fd5b5060405162003710380380620037108339810160408190526200003991620000b2565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506000805460ff60a01b19169055600391909155600480546001600160a01b0319166001600160a01b03909216919091179055620000f1565b60008060408385031215620000c657600080fd5b825160208401519092506001600160a01b0381168114620000e657600080fd5b809150509250929050565b61360f80620001016000396000f3fe6080604052600436106101025760003560e01c8063a13d4e6b11610095578063e81f6f0311610064578063e81f6f03146102ab578063edd81849146102cb578063f23a6e61146102f8578063f2fde38b14610324578063f59e754c1461034457600080fd5b8063a13d4e6b1461023b578063b60e7a3b1461024e578063bc197c8114610261578063d602173c1461028d57600080fd5b80635f483313116100d15780635f483313146101c1578063715018a6146101d457806388e7b4d7146101e95780638da5cb5b1461020957600080fd5b80631031ca441461010e578063150b7a02146101315780633eac3f85146101755780635c975abb1461019757600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b506003546040519081526020015b60405180910390f35b34801561013d57600080fd5b5061015c61014c366004612b8c565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610128565b34801561018157600080fd5b50610195610190366004612a9d565b610364565b005b3480156101a357600080fd5b50600054600160a01b900460ff166040519015158152602001610128565b6101956101cf366004612dfa565b6103b9565b3480156101e057600080fd5b50610195610bfd565b3480156101f557600080fd5b50610195610204366004612e3f565b610c71565b34801561021557600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610128565b610195610249366004612d16565b61127e565b61019561025c366004612d16565b6114d3565b34801561026d57600080fd5b5061015c61027c366004612ade565b63bc197c8160e01b95945050505050565b34801561029957600080fd5b506004546001600160a01b0316610223565b3480156102b757600080fd5b506101956102c6366004612d53565b611920565b3480156102d757600080fd5b506102eb6102e6366004612d16565b611c0d565b6040516101289190613215565b34801561030457600080fd5b5061015c610313366004612bf8565b63f23a6e6160e01b95945050505050565b34801561033057600080fd5b5061019561033f366004612a9d565b611d42565b34801561035057600080fd5b5061019561035f366004612e9a565b611e2c565b6000546001600160a01b031633146103975760405162461bcd60e51b815260040161038e906130a5565b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff16156103e35760405162461bcd60e51b815260040161038e9061307b565b60006001836040516103f59190612ef8565b9081526040805191829003602090810183206101608401835280546001600160a01b039081168552600182015481169285019290925260028101549284019290925260038083015460ff161515606085015260048301546080850152600583015460a08501526006830154821660c0850152600783015460e085015260088301546101008501526009830154909116610120840152600a90910154610140830152549091506000906104a99061271061331f565b6104b3908461335c565b6104bf9061271061347f565b9050438260800151116104e45760405162461bcd60e51b815260040161038e906130da565b80826101000151106105085760405162461bcd60e51b815260040161038e90613137565b60c08201516001600160a01b031661057d5734831461057d5760405162461bcd60e51b815260206004820152602b60248201527f57726f6e6720616d6f756e7420656e746572656420666f72207468652062696460448201526a171020b137b93a34b7339760a91b606482015260840161038e565b60c08201516001600160a01b0316156106315760c0820151604051636eb1769f60e11b815233600482015230602482015284916001600160a01b03169063dd62ed3e9060440160206040518083038186803b1580156105db57600080fd5b505afa1580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106139190612eb3565b10156106315760405162461bcd60e51b815260040161038e906131ab565b600060405180610160016040528084600001516001600160a01b0316815260200184602001516001600160a01b0316815260200184604001518152602001846060015115158152602001846080015181526020014381526020018460c001516001600160a01b031681526020018460e00151815260200184610100015181526020018461012001516001600160a01b0316815260200184610140015181525090506001856040516106e29190612ef8565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff191690556004830181905560058301819055600683018054831690556007830181905560088301819055600983018054909216909155600a9091018190556060820151156109365760208201516040808401519051631261c56b60e21b815260048101919091526000916001600160a01b03169063498715ac9060240160206040518083038186803b1580156107b157600080fd5b505afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e99190612ac1565b6001600160a01b0316141561093657600082602001516001600160a01b031663303024df84604001516040518263ffffffff1660e01b815260040161083091815260200190565b60006040518083038186803b15801561084857600080fd5b505afa15801561085c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108849190810190612c61565b905060005b81518110156108cb578181815181106108a4576108a4613587565b6020026020010151836108b7919061331f565b9250806108c381613540565b915050610889565b508134101561092a5760405162461bcd60e51b815260206004820152602560248201527f42616c616e636520496e73756666696369656e7420746f2070617920726f79616044820152646c7469657360d81b606482015260840161038e565b6109343083611ec5565b505b60c08201516001600160a01b031615610a4c5760c08201516040516323b872dd60e01b8152336004820152306024820152604481018790526001600160a01b038216906323b872dd90606401602060405180830381600087803b15801561099c57600080fd5b505af11580156109b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d49190612cf9565b610a465760405162461bcd60e51b815260206004820152603860248201527f556e61626c6520746f207472616e7366657220455243323020746f6b656e732060448201527f746f207468652041756374696f6e2e2041626f7274696e670000000000000000606482015260840161038e565b50610a56565b610a563086611ec5565b6101208201516001600160a01b031615801590610a77575061014082015115155b15610a9757610a978260c001518361014001518461012001516000611fe3565b610aa1818661331f565b341115610ac657610ac63386610ab784346134bf565b610ac191906134bf565b611ec5565b61010082018390526101408201859052336101208301526040518290600190610af0908990612ef8565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e08501516007820155610100850151600882015561012085015160098201805490951693169290921790925561014090920151600a90920191909155859033907f404d5f135c85f24fa52ef59254b87aaee6e59b6512323e308e5e3c7d997f4bfd90610bed908a90613030565b60405180910390a3505050505050565b6000546001600160a01b03163314610c275760405162461bcd60e51b815260040161038e906130a5565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600054600160a01b900460ff1615610c9b5760405162461bcd60e51b815260040161038e9061307b565b6000600184604051610cad9190612ef8565b90815260408051602092819003830181206101608201835280546001600160a01b0390811683526001820154811694830194909452600281015492820192909252600382015460ff161515606082015260048201546080820152600582015460a08201526006820154831660c08201819052600783015460e083015260088301546101008301526009830154909316610120820152600a909101546101408201529150610dac5760405162461bcd60e51b815260206004820152602760248201527f41756374696f6e206d75737420626520706c6163656420666f72204552433230604482015266103a37b5b2b71760c91b606482015260840161038e565b43816080015111610dcf5760405162461bcd60e51b815260040161038e906130da565b6000600354612710610de1919061331f565b610deb908561335c565b610df79061271061347f565b90508082610100015110610e1d5760405162461bcd60e51b815260040161038e90613137565b60c0820151604051636eb1769f60e11b81526001600160a01b0385811660048301523060248301528692169063dd62ed3e9060440160206040518083038186803b158015610e6a57600080fd5b505afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea29190612eb3565b1015610ec05760405162461bcd60e51b815260040161038e906131ab565b600060405180610160016040528084600001516001600160a01b0316815260200184602001516001600160a01b0316815260200184604001518152602001846060015115158152602001846080015181526020014381526020018460c001516001600160a01b031681526020018460e00151815260200184610100015181526020018461012001516001600160a01b031681526020018461014001518152509050600186604051610f719190612ef8565b90815260405190819003602001812080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff19169055600480840182905560058401829055600684018054841690556007840182905560088401829055600984018054909316909255600a9092019190915560c08301516323b872dd60e01b83526001600160a01b03878116928401929092523060248401526044830188905291908216906323b872dd90606401602060405180830381600087803b15801561104157600080fd5b505af1158015611055573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110799190612cf9565b6110fc5760405162461bcd60e51b815260206004820152604860248201527f556e61626c6520746f207472616e7366657220455243323020746f6b656e732060448201527f66726f6d207468652062696464657220746f207468652041756374696f6e2e2060648201526741626f7274696e6760c01b608482015260a40161038e565b6101208201516001600160a01b03161580159061111d575061014082015115155b1561113d5761113d8260c001518361014001518461012001516000611fe3565b610100820183905261014082018690526001600160a01b0385166101208301526040518290600190611170908a90612ef8565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e0850151600782015561010085015160088201556101208501516009820180549095169084161790935561014090930151600a909201919091558791908716907f404d5f135c85f24fa52ef59254b87aaee6e59b6512323e308e5e3c7d997f4bfd9061126d908b90613030565b60405180910390a350505050505050565b60006001826040516112909190612ef8565b90815260408051602092819003830181206101608201835280546001600160a01b0390811683526001820154811694830194909452600281015492820192909252600382015460ff1615156060820152600482015460808201819052600583015460a08301526006830154841660c0830152600783015460e083015260088301546101008301526009830154909316610120820152600a909101546101408201529150431161139d5760405162461bcd60e51b815260206004820152603360248201527f41756374696f6e2063616e277420626520736574746c6564206265666f72652060448201527234ba103932b0b1b432b9903a34329032b7321760691b606482015260840161038e565b6060810151602082015160e083015160408085015160c08601516101408701516101208801519351929391929091906001906113da908b90612ef8565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff191690556004830181905560058301819055600683018054831690556007830181905560088301819055600983018054909216909155600a90910155875160c089015161146b918991899190859089908b906121b4565b61147c83838a600001516001611fe3565b6002805490600061148c83613529565b91905055507fafdc429d8d197c8769e7a13a5bcd959b9f8dade051086aac5fbcba8e8d7f3a5e896040516114c09190613030565b60405180910390a1505050505050505050565b60006001826040516114e59190612ef8565b90815260408051602092819003830181206101608201835280546001600160a01b039081168084526001830154821695840195909552600282015493830193909352600381015460ff161515606083015260048101546080830152600581015460a08301526006810154831660c0830152600781015460e083015260088101546101008301526009810154909216610120820152600a9091015461014082015291506115e15760405162461bcd60e51b815260206004820152602560248201527f41756374696f6e20697320616c726561647920736574746c65642e2041626f726044820152643a34b7339760d91b606482015260840161038e565b80516001600160a01b031633148061160357506000546001600160a01b031633145b6116845760405162461bcd60e51b815260206004820152604660248201527f41756374696f6e2063616e27742062652063616e63656c6c65642066726f6d2060448201527f6f74686572207468616e6b2073656c6c6572206f72206f776e65722e2041626f606482015265393a34b7339760d11b608482015260a40161038e565b60c08101516101408201516101208301516040516001906116a6908790612ef8565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff191690556004830181905560058301819055600683018054831690556007830181905560088301819055600983018054909216909155600a909101556001600160a01b0381161580159061173357508115155b15611745576117458383836000611fe3565b6000806001600160a01b031685602001516001600160a01b031663498715ac87604001516040518263ffffffff1660e01b815260040161178791815260200190565b60206040518083038186803b15801561179f57600080fd5b505afa1580156117b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117d79190612ac1565b6001600160a01b031614156118bc57600085602001516001600160a01b031663303024df87604001516040518263ffffffff1660e01b815260040161181e91815260200190565b60006040518083038186803b15801561183657600080fd5b505afa15801561184a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118729190810190612c61565b905060005b81518110156118b95781818151811061189257611892613587565b6020026020010151836118a5919061331f565b9250806118b181613540565b915050611877565b50505b80156118cc576118cc8282611ec5565b600280549060006118dc83613529565b91905055507f8491f144dda005dc8140735549d904900585c1cbe24e47da9dcbf67a8b7233d5866040516119109190613030565b60405180910390a1505050505050565b600054600160a01b900460ff161561194a5760405162461bcd60e51b815260040161038e9061307b565b60018860405161195a9190612ef8565b9081526020016040518091039020600501546000146119d25760405162461bcd60e51b815260206004820152602e60248201527f41756374696f6e20616c7265616479206578697374656420666f72206375727260448201526d195b9d08185d58dd1a5bdb88125960921b606482015260840161038e565b6119dd43600561331f565b8211611a475760405162461bcd60e51b815260206004820152603360248201527f41756374696f6e206d757374206c617374206174206c65617374203520626c6f604482015272636b732066726f6d207468697320626c6f636b60681b606482015260840161038e565b611a5487878688876124be565b60028054906000611a6483613540565b91905055506000604051806101600160405280866001600160a01b03168152602001886001600160a01b031681526020018781526020018915158152602001848152602001438152602001836001600160a01b031681526020018581526020016000815260200160006001600160a01b03168152602001600081525090508060018a604051611af39190612ef8565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e0850151600782015561010085015160088201556101208501516009820180549095169084161790935561014090930151600a909201919091558791908916908a1515907fe0afed058bf71e435ebaa19f54f64a53ab230a24f14945338c41bd5836d3174c90611bfa908e908a9089908b90613043565b60405180910390a4505050505050505050565b611c9060405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b600182604051611ca09190612ef8565b9081526040805191829003602090810183206101608401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff161515606084015260048201546080840152600582015460a08401526006820154811660c0840152600782015460e08401526008820154610100840152600982015416610120830152600a015461014082015292915050565b6000546001600160a01b03163314611d6c5760405162461bcd60e51b815260040161038e906130a5565b6001600160a01b038116611dd15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161038e565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314611e565760405162461bcd60e51b815260040161038e906130a5565b60025415611ec05760405162461bcd60e51b815260206004820152603160248201527f4665652063616e2774206265206368616e6765642069662074686572652069736044820152701037b733b7b4b7339030bab1ba34b7b71760791b606482015260840161038e565b600355565b80471015611f155760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161038e565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611f62576040519150601f19603f3d011682016040523d82523d6000602084013e611f67565b606091505b5050905080611fde5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161038e565b505050565b600061271060035485611ff6919061347f565b612000919061335c565b90506001600160a01b0385161561217457811561213f576001600160a01b03851663a9059cbb8461203184886134bf565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561207757600080fd5b505af115801561208b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120af9190612cf9565b506004805460405163a9059cbb60e01b81526001600160a01b03918216928101929092526024820183905286169063a9059cbb906044015b602060405180830381600087803b15801561210157600080fd5b505af1158015612115573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121399190612cf9565b506121ad565b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820186905286169063a9059cbb906044016120e7565b81156121a35761218883610ac183876134bf565b60045461219e906001600160a01b031682611ec5565b6121ad565b6121ad8385611ec5565b5050505050565b8661222257604051637921219560e11b81526001600160a01b0387169063f242432a906121eb903090889088908890600401612ff8565b600060405180830381600087803b15801561220557600080fd5b505af1158015612219573d6000803e3d6000fd5b505050506124b5565b604051631261c56b60e21b81526004810184905260009081906001600160a01b0389169063498715ac9060240160206040518083038186803b15801561226757600080fd5b505afa15801561227b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061229f9190612ac1565b6001600160a01b031614156123775760405163303024df60e01b8152600481018590526000906001600160a01b0389169063303024df9060240160006040518083038186803b1580156122f157600080fd5b505afa158015612305573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261232d9190810190612c61565b905060005b81518110156123745781818151811061234d5761234d613587565b602002602001015183612360919061331f565b92508061236c81613540565b915050612332565b50505b6001600160a01b03821661241657866001600160a01b031663b88d4fde828888886123a189612715565b6040516020016123b19190612f14565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016123df9493929190612fbb565b6000604051808303818588803b1580156123f857600080fd5b505af115801561240c573d6000803e3d6000fd5b50505050506124b3565b60006124218361283e565b61242a85612715565b60405160200161243b929190612f5e565b60408051601f1981840301815290829052635c46a7ef60e11b825291506001600160a01b0389169063b88d4fde90849061247f908b908b908b908890600401612fbb565b6000604051808303818588803b15801561249857600080fd5b505af11580156124ac573d6000803e3d6000fd5b5050505050505b505b50505050505050565b8461262e57600081116124d057600080fd5b604051627eeac760e11b81526001600160a01b0384811660048301526024820184905282919086169062fdd58e9060440160206040518083038186803b15801561251957600080fd5b505afa15801561252d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125519190612eb3565b10156125c55760405162461bcd60e51b815260206004820152603860248201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660448201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606482015260840161038e565b604051637921219560e11b81526001600160a01b0385169063f242432a906125f7908690309087908790600401612ff8565b600060405180830381600087803b15801561261157600080fd5b505af1158015612625573d6000803e3d6000fd5b505050506121ad565b6040516331a9108f60e11b8152600481018390526001600160a01b038085169190861690636352211e9060240160206040518083038186803b15801561267357600080fd5b505afa158015612687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ab9190612ac1565b6001600160a01b0316146121ad5760405162461bcd60e51b815260206004820152602b60248201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060448201526a3a34329030baba3437b91760a91b606482015260840161038e565b6060816127395750506040805180820190915260018152600360fc1b602082015290565b8160005b8115612763578061274d81613540565b915061275c9050600a8361335c565b915061273d565b60008167ffffffffffffffff81111561277e5761277e61359d565b6040519080825280601f01601f1916602001820160405280156127a8576020820181803683370190505b509050815b8515612835576127be6001826134bf565b905060006127cd600a8861335c565b6127d890600a61347f565b6127e290886134bf565b6127ed906030613337565b905060008160f81b90508084848151811061280a5761280a613587565b60200101906001600160f81b031916908160001a90535061282c600a8961335c565b975050506127ad565b50949350505050565b60408051602880825260608281019093526000919060208201818036833701905050905060005b601481101561297e57600061287b8260136134bf565b61288690600861347f565b6128919060026133d5565b6128a4906001600160a01b03871661335c565b60f81b9050600060108260f81c6128bb9190613370565b60f81b905060008160f81c60106128d2919061349e565b8360f81c6128e091906134d6565b60f81b90506128ee82612985565b856128fa86600261347f565b8151811061290a5761290a613587565b60200101906001600160f81b031916908160001a90535061292a81612985565b8561293686600261347f565b61294190600161331f565b8151811061295157612951613587565b60200101906001600160f81b031916908160001a905350505050808061297690613540565b915050612865565b5092915050565b6000600a60f883901c10156129ac576129a360f883901c6030613337565b60f81b92915050565b6129a360f883901c6057613337565b600082601f8301126129cc57600080fd5b813560206129e16129dc836132fb565b6132ca565b80838252828201915082860187848660051b8901011115612a0157600080fd5b60005b85811015612a2057813584529284019290840190600101612a04565b5090979650505050505050565b600082601f830112612a3e57600080fd5b813567ffffffffffffffff811115612a5857612a5861359d565b612a6b601f8201601f19166020016132ca565b818152846020838601011115612a8057600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215612aaf57600080fd5b8135612aba816135b3565b9392505050565b600060208284031215612ad357600080fd5b8151612aba816135b3565b600080600080600060a08688031215612af657600080fd5b8535612b01816135b3565b94506020860135612b11816135b3565b9350604086013567ffffffffffffffff80821115612b2e57600080fd5b612b3a89838a016129bb565b94506060880135915080821115612b5057600080fd5b612b5c89838a016129bb565b93506080880135915080821115612b7257600080fd5b50612b7f88828901612a2d565b9150509295509295909350565b60008060008060808587031215612ba257600080fd5b8435612bad816135b3565b93506020850135612bbd816135b3565b925060408501359150606085013567ffffffffffffffff811115612be057600080fd5b612bec87828801612a2d565b91505092959194509250565b600080600080600060a08688031215612c1057600080fd5b8535612c1b816135b3565b94506020860135612c2b816135b3565b93506040860135925060608601359150608086013567ffffffffffffffff811115612c5557600080fd5b612b7f88828901612a2d565b60006020808385031215612c7457600080fd5b825167ffffffffffffffff811115612c8b57600080fd5b8301601f81018513612c9c57600080fd5b8051612caa6129dc826132fb565b80828252848201915084840188868560051b8701011115612cca57600080fd5b600094505b83851015612ced578051835260019490940193918501918501612ccf565b50979650505050505050565b600060208284031215612d0b57600080fd5b8151612aba816135cb565b600060208284031215612d2857600080fd5b813567ffffffffffffffff811115612d3f57600080fd5b612d4b84828501612a2d565b949350505050565b600080600080600080600080610100898b031215612d7057600080fd5b883567ffffffffffffffff811115612d8757600080fd5b612d938b828c01612a2d565b9850506020890135612da4816135cb565b96506040890135612db4816135b3565b9550606089013594506080890135612dcb816135b3565b935060a0890135925060c0890135915060e0890135612de9816135b3565b809150509295985092959890939650565b60008060408385031215612e0d57600080fd5b823567ffffffffffffffff811115612e2457600080fd5b612e3085828601612a2d565b95602094909401359450505050565b600080600060608486031215612e5457600080fd5b833567ffffffffffffffff811115612e6b57600080fd5b612e7786828701612a2d565b935050602084013591506040840135612e8f816135b3565b809150509250925092565b600060208284031215612eac57600080fd5b5035919050565b600060208284031215612ec557600080fd5b5051919050565b60008151808452612ee48160208601602086016134f9565b601f01601f19169290920160200192915050565b60008251612f0a8184602087016134f9565b9190910192915050565b6f534146455452414e5346455246524f4d60801b81526827272723232327272760b81b601082015260008251612f518160198501602087016134f9565b9190910160190192915050565b6c086aaa6a89e9aa89e968a9c60f609b1b815260008351612f8681600d8501602088016134f9565b6827272723232327272760b81b600d918401918201528351612faf8160168401602088016134f9565b01601601949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612fee90830184612ecc565b9695505050505050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b602081526000612aba6020830184612ecc565b6080815260006130566080830187612ecc565b6020830195909552506001600160a01b03929092166040830152606090910152919050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252603b908201527f41756374696f6e2068617320616c726561647920656e6465642e20556e61626c60408201527f6520746f2070726f63657373206269642e2041626f7274696e672e0000000000606082015260800190565b6020808252604e908201527f4269642066726565206f66207468652061756374696f6e20666565206973206c60408201527f6f776572207468616e6b2061637475616c20686967686573742062696420707260608201526d34b1b2971020b137b93a34b7339760911b608082015260a00190565b60208082526044908201527f496e73756666696369656e7420617070726f76616c20666f722045524332302060408201527f746f6b656e20666f72207468652061756374696f6e206269642e2041626f727460608201526334b7339760e11b608082015260a00190565b81516001600160a01b031681526101608101602083015161324160208401826001600160a01b03169052565b5060408301516040830152606083015161325f606084018215159052565b506080830151608083015260a083015160a083015260c083015161328e60c08401826001600160a01b03169052565b5060e083810151908301526101008084015190830152610120808401516001600160a01b03811682850152505061014092830151919092015290565b604051601f8201601f1916810167ffffffffffffffff811182821017156132f3576132f361359d565b604052919050565b600067ffffffffffffffff8211156133155761331561359d565b5060051b60200190565b600082198211156133325761333261355b565b500190565b600060ff821660ff84168060ff038211156133545761335461355b565b019392505050565b60008261336b5761336b613571565b500490565b600060ff83168061338357613383613571565b8060ff84160491505092915050565b600181815b808511156133cd5781600019048211156133b3576133b361355b565b808516156133c057918102915b93841c9390800290613397565b509250929050565b6000612aba83836000826133eb57506001613479565b816133f857506000613479565b816001811461340e576002811461341857613434565b6001915050613479565b60ff8411156134295761342961355b565b50506001821b613479565b5060208310610133831016604e8410600b8410161715613457575081810a613479565b6134618383613392565b80600019048211156134755761347561355b565b0290505b92915050565b60008160001904831182151516156134995761349961355b565b500290565b600060ff821660ff84168160ff04811182151516156134755761347561355b565b6000828210156134d1576134d161355b565b500390565b600060ff821660ff8416808210156134f0576134f061355b565b90039392505050565b60005b838110156135145781810151838201526020016134fc565b83811115613523576000848401525b50505050565b6000816135385761353861355b565b506000190190565b60006000198214156135545761355461355b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146135c857600080fd5b50565b80151581146135c857600080fdfea2646970667358221220d90fd781dda6aacb697e592db4c7818cfa85f49d647c84fee2da4a631f38bd8564736f6c63430008070033'
