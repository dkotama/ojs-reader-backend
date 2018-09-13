const Journal = require("../db/models").journals;
const Issue = require("../db/models").issues;
const journalCtrl = {}

journalCtrl.list = (req, res) => {
  // return res.status(200).send({message: "hello"});
  return Journal.findAll({
            include:[
              {
                model: Issue,
                attributes: {exclude: ['journal_id','createdAt', 'updatedAt']},
                as: 'issues'
              }
            ],
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          })
          .then((journals) => res.status(200).send(journals))
          .catch((err) =>
            res.status(400).send({error: err}));
}

module.exports = journalCtrl