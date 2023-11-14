const { publicEncrypt, privateDecrypt } = require('crypto');

const { publicKey, privateKey } = require('./keypair');

const message = 'the british are comming!';

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log('Encrypted data:', encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log('Dectepted data:', decryptedData.toString('utf-8'));