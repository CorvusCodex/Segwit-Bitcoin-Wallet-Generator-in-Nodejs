# Bitcoin Segwit also known as Bech32 Wallet Generator in Nodejs 
This code is a script for generating a Bitcoin address using the BIP39 and BIP32 libraries. It starts by importing the required modules such as coinkey, fs, crypto, cluster, blessed, bip39, tiny-secp256k1, bip32 and bitcoinjs-lib.

Requirements
Node.js
coinkey
fs
crypto
cluster
blessed
bip39
tiny-secp256k1
bip32
bitcoinjs-lib
Usage
Install the required dependencies by running npm install.
Run the script using node app.js.
The script will generate a seed phrase and a Bitcoin address, which will be printed to the console.
The script generates a seed phrase using the bip39 library and converts it into a seed buffer. The seed buffer is then used to generate a root node using the bip32 library. The first account’s node is derived from the root node using the path "m/44'/0'/0'". The external chain node of this account is derived using the path "0". The first address from the external chain is derived and its public key is obtained. Finally, a P2WPKH (Pay-to-Witness-Public-Key-Hash) output script is generated using the bitcoin.payments.p2wpkh method and the Bitcoin address is printed to the console.

MIT License

Copyright (c) 2023 CorvusCodex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
