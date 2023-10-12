const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x7bdF65A7d9a8b6d01F43094b08AF04faf1138739', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xeCDc7BA3b74D6dE24c27821daBE35AD83B056F92', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0x7bdF65A7d9a8b6d01F43094b08AF04faf1138739', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xeCDc7BA3b74D6dE24c27821daBE35AD83B056F92', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x4477fF39777451994e49659D957aa26Ead4b83B1', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x47D166313616c23616c8Dd88c3339A350471D2bb', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0x4477fF39777451994e49659D957aa26Ead4b83B1', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x47D166313616c23616c8Dd88c3339A350471D2bb', //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
