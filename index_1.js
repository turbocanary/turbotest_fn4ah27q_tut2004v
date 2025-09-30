const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var randomBuffer = crypto.randomBytes(4);
  var suffix = randomBuffer.readUInt32BE(0) / 0xFFFFFFFF; // floating point between 0 and 1
  var password = "sssAAAA" + suffix;
  return password;
}