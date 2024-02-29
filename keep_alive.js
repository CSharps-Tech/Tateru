let alivers = 0;
const express = require('express');
const app = express();
function keepAlive() {
  alivers++;
  app.get('/status', (req, res) => {
    res.send(`<h1>Keep Alive</h1><p>Alive: ${alivers}</p>`);
  });
}
// use keepAlive() to keep the server alive
module.exports = keepAlive;