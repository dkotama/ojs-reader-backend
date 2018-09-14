let c = require('../lib/commons');

exports.userCheck = (req, res, next) => {
  let userId = req.headers['user_id'];

  if (!userId) {
    return res.status(422).send(c.makeResponse(null, "Please provide user id"));
  }

  next()
}