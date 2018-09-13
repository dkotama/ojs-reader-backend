const Issue = require("../db/models").issues;
const Paper = require("../db/models").papers;
const issueCtrl = {}

issueCtrl.list = (req, res) => {
  return Issue.findAll({
            include:[
              {
                model: Paper,
                attributes: {exclude: ['issue_id', 'createdAt', 'updatedAt']},
                as: 'papers'
              }
            ],
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          })
          .then((results) => res.status(200).send(results))
          .catch((err) =>
            res.status(400).send({error: err}));
}

module.exports = issueCtrl