const express = require('express');
const app = express();

const path = require('path');

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '64ca2fa6908349899e2e272bce60c1e6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());

const port = process.env.PORT || 4040;

app.get('/', function(req, res) {
    rollbar.log('App.get homepage hit')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});



app.listen(port, function() {
    console.log(`Rabotayu on ${port}`)
    console.log(port)
})