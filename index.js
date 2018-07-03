
var speakeasy = require('speakeasy')
var qr = require('qr-image');

async function getToken(secret, encoding, algorithm) {
    if (typeof encoding === 'undefined') {
        encoding = 'base32';
    }
    if (typeof algorithm === 'undefined') {
        algorithm = 'sha1';
    }
    let token = speakeasy.totp({ secret: secret, encoding: encoding, algorithm: algorithm });
    return token;
}

async function verifyToken(secret, token, encoding) {
    if (typeof encoding === 'undefined') {
        encoding = 'base32';
    }
    let result = speakeasy.totp.verify({ secret: secret, encoding: encoding, token: token });
    return result;
}

async function getQrCodeUrl(secret, label, issuer, encoding, algorithm) {
    if (typeof encoding === 'undefined') {
        encoding = 'base32';
    }
    if (typeof algorithm === 'undefined') {
        algorithm = 'sha1';
    }
    let rqCodeUrl = speakeasy.otpauthURL({ secret: secret, encoding: encoding, algorithm: algorithm, label: label, issuer: issuer });
    return rqCodeUrl;
}

async function getQrCode(secret, label, issuer, encoding, algorithm) {
    let qrCodeUrl = await getQrCodeUrl(secret, label, issuer, encoding, algorithm);
    let code = qr.image(qrCodeUrl, { type: 'png' });
    return code;
}


// Make the main function available to other packages that require us
module.exports = {
    getToken, 
    verifyToken,
    getQrCode,
    getQrCodeUrl
}