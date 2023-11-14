const { createHmac } = require('crypto');

// HMAC - hashed message authentication code
// Used for creation of JWTs

function createHmacHash(key, message) {
  return createHmac('sha256', key).update(message).digest('hex');
}

const message = 'boo 👻';

const password1 = 'password';
const password2 = 'other-password';

console.log('Same password hashes match:', createHmacHash(password1, message) === createHmacHash(password1, message));
console.log('Different password hashes match:', createHmacHash(password1, message) === createHmacHash(password2, message));

