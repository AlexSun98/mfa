# mfa-e2e

A Node.js package that generates MFA time based one time token based on a secret which can be used in a end-to-end automated testing solution. 

Currently, it supports Speakeasy which is a one-time passcode generator, ideal for use in two-factor authentication, that supports Google Authenticator and other two-factor devices.

## Usage

First, install the package using npm:

    npm install mfa-e2e --save

Then, require the package and use it like so:


    var mfa = require('mfa-e2e');
    let locals = {};
    locals.secret = '{your secret}';
    locals.encoding = 'base32'; // it's optional, the default one is base32
    locals.algorithm = 'sha1'; // it's optional, the default one is sha1
    locals.label = 'your label such as email';
    locals.issuer = 'My test services';

    async function test(){
        var token = await mfa.getToken(locals.secret);
        console.log('token - ' + token); 
        console.log('token verifed - ' + await mfa.verifyToken(locals.secret, token)); 
        console.log('QR Code Url - ' + await mfa.getQrCodeUrl(locals.secret, locals.label, locals.issuer)); 
    }


