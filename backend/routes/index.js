var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getdata', function (req, res, next) {
  res.json({ 'status': '200', 'message': 'Connection Successful with backend' });
});

router.get('/users', (req, res) => {
  const users = [
    { name: "Kuldeep", email: "Kuldeep@gmail.com", age: 26, gender: "Female" },
    { name: "Kuldeep2", email: "Kuldeep2@gmail.com", age: 26, gender: "male" },
    { name: "Kuldeep3", email: "Kuldeep3@gmail.com", age: 26, gender: "male" },
    { name: "Kuldeep4", email: "Kuldeep4@gmail.com", age: 26, gender: "male" },
    { name: "Kuldeep5", email: "Kuldeep5@gmail.com", age: 26, gender: "male" }
  ]
  res.json({ users: users });
})

module.exports = router;
