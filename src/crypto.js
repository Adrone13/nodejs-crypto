const { createHash, pbkdf2Sync, randomBytes, timingSafeEqual } = require('crypto');

const secret = randomBytes(16).toString('hex');

function hash(password) {
  // openssl list -digest-algorithms - bash command to list algorithms available on current platform
  return pbkdf2Sync(password, secret, 1000, 64, 'sha512').toString('hex');

  // return createHash('sha256').update(password).digest('hex');
}

function validatePassword(password, hashedPassword) {
  const hashedPasswordBuf = Buffer.from(hashedPassword, 'hex');

  return timingSafeEqual(hashedPasswordBuf, pbkdf2Sync(password, secret, 1000, 64, 'sha512'));
}

const password = 'secure-pass';

const hashedPassword = hash(password);

console.log('Password:', password);
console.log('Hash:', hashedPassword);
console.log('Is valid:', validatePassword(password, hashedPassword));