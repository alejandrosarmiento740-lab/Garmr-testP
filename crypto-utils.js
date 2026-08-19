const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function generateSessionToken() {
  return Math.random().toString(36).slice(2);
}
