var express = require('express');
var router = express.Router();
const connection = require('../db/connection');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/registros', function(req, res, next) {

  connection.query('SELECT * FROM cdr', (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });

});

module.exports = router;
