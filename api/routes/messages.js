var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    username: 'Tolea',
    user_id: 0110,
    messages: [
      {
        id: 1,
        user_id: 1,
        body: "Message from api"
      },
      {
        id: 2,
        user_id: 1,
        body: "Message 2 from api"
      }
    ]
  });
});

module.exports = router;
