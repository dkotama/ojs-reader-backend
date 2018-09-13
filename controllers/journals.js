const Journal = require("../db/models").journals;
const journalCtrl = {}

journalCtrl.list = (req, res) => {
  // return res.status(200).send({message: "hello"});
  return Journal.findAll({
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          })
          .then((journals) => res.status(200).send(journals)
          .catch((err) => res.status(400).send({})));
}

module.exports = journalCtrl