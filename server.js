const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my YouTube channel</h1><p>Hello, World!</p>');
}).listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000');
});
