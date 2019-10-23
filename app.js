const app = require('express')();
const https = require('https');
const fs = require('fs');

const port = 3000;
//GET home route
app.get('/', (req, res) => {
     res.send('Hello World');
});

// we will pass our 'app' to 'https' server
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// we will pass our 'app' to 'https' server
https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'scott'
}, app)
.listen(port, () => console.log(`Example app listening on port ${port}!`));
