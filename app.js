"use strict";

process.title = "Bitcoin Bruteforce";

// Importing required modules
const CoinKey = require('coinkey');
const fs = require('fs');
const crypto = require('crypto');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const blessed = require('blessed');
const bip39 = require('bip39');
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');
const bitcoin = require('bitcoinjs-lib');

// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

 let seedPhrase = bip39.generateMnemonic();
 console.log("Seed Phrase: " + seedPhrase);

 // Generate a seed buffer from the seed phrase
 const seedBuffer = bip39.mnemonicToSeedSync(seedPhrase);
 //console.log(seedBuffer);

 // Generate a root node from the seed buffer using the bip32 library
 const root = bip32.fromSeed(seedBuffer);
 //console.log(root);

 // Derive the first account's node (m/44'/0'/0')
 const account = root.derivePath("m/44'/0'/0'");
 //console.log(account);

 // Derive the external chain node of this account (m/44'/0'/0'/0)
 const node = account.derivePath("0");
 //console.log(node);

 // Derive the first address from the external chain (m/44'/0'/0'/0/0)
 const child = node.derive(0);
 //console.log(child);

 // Get the public key for this address
 const publicKey = child.publicKey;
 //console.log(publicKey);

 // Generate a P2WPKH (Pay-to-Witness-Public-Key-Hash) output script
 const { address } = bitcoin.payments.p2wpkh({ pubkey: publicKey });
 console.log("Address: " + address);
