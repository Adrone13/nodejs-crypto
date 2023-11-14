const { randomBytes, createCipheriv, createDecipheriv } = require('crypto');

// Cipher

const message = 'secret stuff';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// Encrypt

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
console.log('Encrypted:', encryptedMessage);

// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log('Decrypted:', decryptedMessage);


