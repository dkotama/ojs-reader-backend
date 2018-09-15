const Paper = require("../db/models").papers;
const c  = require("../lib/commons");

const ctrl = {}

ctrl.retrieve = (req, res) => {
  return Paper
    .findById(req.params.paperID)
    .then((result) => {
      if (!result) {
        res.status(200).send(c.makeResponse(null, "Paper Not Exist"))
      }

      res.status(200).send(c.makeResponse(result, null))
    })
    
    .catch((err) =>
      res.status(400).send(c.makeResponse(c.makeResponse(null, "Error when tying to get paper data"))));
}

module.exports = ctrl