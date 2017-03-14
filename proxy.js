var httpProxy = require('http-proxy');
var fs = require('fs');

httpProxy.createProxyServer({target: {
    host: 'localhost',
    port: 8080
  },
  ssl: {
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('cert.pem', 'utf8')
  }}).listen(443);
