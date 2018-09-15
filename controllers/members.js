const Users = require("../db/models").users;
const c = require("../lib/commons");

const ctrl = {}

ctrl.login = (req, res) => {
  let _username = req.body.username;
  let _password = req.body.password;

  if (!_username) {
    return res.status(422).send(c.makeResponse(null, "Please provide username"));
  }

  if (!_password) {
    return res.status(422).send(c.makeResponse(null, "Please provide password"));
  }

  return Users.find({
              where: {
                username: _username,
                password: _password
              }
            })
            .then((user) => {
              if (!user) {
                res.status(400).send(c.makeResponse(null, "User Not Registered or Password Wrong"));
              }

              return res.status(200).send(c.makeResponse(user, null));
            })
            .catch((err) => res.status(500).send(c.makeResponse(null, "Error when trying to get user")));
}


ctrl.register = (req, res) => {
  let _username = req.body.username;
  let _password = req.body.password;

  if (!_username) {
    return res.status(422).send(c.makeResponse(null, "Please provide username"));
  }

  if (!_password) {
    return res.status(422).send(c.makeResponse(null, "Please provide password"));
  }

  var newUser = {};
  newUser.username = _username;
  newUser.password = _password;

  return Users.create(newUser)
            .then((user) => {
              return res.status(200).send(c.makeResponse(user, null));
            })
            .catch((err) => res.status(500).send(c.makeResponse(null, "Error when trying to register user")));
}


module.exports = ctrl