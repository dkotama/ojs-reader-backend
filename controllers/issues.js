const Issue = require("../db/models").issues;
const Paper = require("../db/models").papers;
const issueCtrl = {}

issueCtrl.listByJournal = (req, res) => {
  return Issue.findAll({
            where: {
              journal_id: req.params.journalID
            },
            include:[
              {
                model: Paper,
                attributes: {
                  exclude: ['issue_id', 'createdAt', 'updatedAt']
                },
                as: 'papers'
              }
            ]
          })
          .then((results) => res.status(200).send(results))
          .catch((err) =>
            res.status(400).send({error: err}));
}

module.exports = issueCtrl