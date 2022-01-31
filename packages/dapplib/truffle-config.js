require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain unknown hover kitten bottom giant'; 
let testAccounts = [
"0x0907bcbc887575c50e7802d1e8a0ba6595e2734a32616ce71b32dc4f71abceb4",
"0x36bfb6d8506963dbcae81a9ea53f800e77f86df4e98e9f66f407fd0554b4ba28",
"0x6e9c91a7a842317870210019cf26bc1651f7641959b27c1953d7b12a2be2cda6",
"0xf05a6f578afddf5beaf31f4b3764bdd80c34bc2efa432040ad1ef6be889a6402",
"0x37a898347d67ae39ad079f658c456d8a14d1f29a79c1c7ae920b99cbb193dfb3",
"0x51062868dea5ada2dc5da43afc4f6d01f8a304d1bb222aa5271e5f0e9492943b",
"0x379d7174f9c8041ad8e17275cb63f6e827d962800845de1888193c62a93dbdce",
"0x3c7cb24744f34b49144f0509a0f3cee09ab9ebe8837123aba4ec8e4e7f9fac16",
"0xfa9f43e6e54fb5b127e95344c3d1cb13a520e7d01d56bc4a5580bc8b345c14a9",
"0x918b5bbf9e361b9008121e4f63134844057c02d5921fb76f1a9ab9fad54a5884"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


