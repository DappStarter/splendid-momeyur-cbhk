require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember pupil hope cloth front tongue'; 
let testAccounts = [
"0x0e6f897d00d0d47a6c9b532777b5c2503737cdedf35090f8cae48090ea06aa49",
"0x3107fb1c1535d009bd1da13195ea8ccd60c2df4f0cd0f7c6c3c6194119a14db4",
"0x96d9295fb3573c571751c5995f36d400af007d405b809080773351f2c77390a1",
"0x12a7721dbb3c9296fc6a661c13886f0975ca52c830e5e105a836743c053c2153",
"0x44d38b02981dab35062077ebc90859b21897ec42277dc76574c94cbb7d097ac8",
"0x6a69c7378bc3f4efb965b34802c3887586603e72dc4fc03502be42d9871af7a0",
"0xb9fca56694748536423f058ca3143564ad47d7760ced746717beec7963db6096",
"0x13742fc17ce6f9778c9d3e76989f45322f04dd1c7f78c30a98581a441fd98e90",
"0xed7d974e65565ff15a3efc619c0355e84f25cc8f423da731b413085a6feaa957",
"0x45bb324929e4426c68960808b2cb7b6c1e4b5c447abbdffbcb4f8eca117a573b"
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


