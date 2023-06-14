const { request } = require('https');

const req = request('https://www.google.com', res => {
    req.on('data', (chunk) => {
        console.log(`chunk data : ${chunk}`);
    });
    req.on('end', () => {
        console.log('No more data');
    });

});

req.end();