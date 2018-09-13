const c = require("../lib").commons;
const leagueCtrl = require("../controllers").leagues;
const constants = require("../lib").constants;

let ERR = constants.ERROR_TYPE;

module.exports = authorizeToken = (req, res, next) => {
  if (req.header("token") == APP_TOKEN) {
    return next()
  } else {
    return res.status(400).send(c.makeResponse(null, ERR.BAD_REQUEST, "Unauthorized Access"));
  }
}