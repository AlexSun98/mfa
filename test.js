// Change './index' to 'mfa-e2e' if you use this code outside of this package

var mfa = require('./index');
let locals = {};
locals.secret = '{your secret}';
locals.encoding = 'base32';
locals.algorithm = 'sha1';
locals.label = '{your email}';
locals.issuer = '{your service name}';

async function test(){
    var token = await mfa.getToken(locals.secret);
    console.log('token - ' + token); 
    console.log('token verifed - ' + await mfa.verifyToken(locals.secret, token)); 
    console.log('QR Code Url - ' + await mfa.getQrCodeUrl(locals.secret, locals.label, locals.issuer)); 
}

test();

