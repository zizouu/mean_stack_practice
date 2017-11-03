const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/lotto', (req, res) => {
  res.download('d:\\', '/dist/index.html');
});

module.exports = router;

router.get('/stock/list/all', (req, res) => {
  const pgp = require('pg-promise')({});
  const db = pgp('postgres://stock_admin:!Han382612@54.190.58.114:5432/stock');
  db.many('SELECT * FROM stock_item')
    .then(function (data) {
      res.send(data);
    })
    .catch(function(error){
      console.log(error.stack);
    });
});
