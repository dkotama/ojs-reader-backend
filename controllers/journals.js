const Journal = require("../db/models").journals;
const Issue = require("../db/models").issues;
const Paper = require("../db/models").papers;
const c = require("../lib/commons");

const journalCtrl = {}

journalCtrl.list = (req, res) => {
  let _limit = 10;
  let page = req.query.page || 1

  return Journal 
    .findAndCountAll({
      limit: _limit,
      offset: _limit * (page - 1),
      order: [['id', 'ASC']]
    })
    .then((result) => {
      if (result.rows.length < 1) {
        res.status(200).send(c.makeResponse([], "No Result"))
      }

      var response = {};
      response.page = page;
      response.journals = result.rows;

      res.status(200).send(c.makeResponse(response, null));

    })
    .catch((error) => res.status(404).send(c.makeResponse(null, "Error when trying to fetch data")));
}

journalCtrl.retrieve = (req, res) => {
  return Journal 
    .find({
      where: {
        id: req.params.journalID
      }
    })
    .then((journal) => {
      if (!journal) {
        return res.status(404).send(c.makeResponse(null, "Journal not Exist"));
      }

      return res.status(200).send(c.makeResponse(journal, null));
    })
    .catch((err) => res.status(404).send(c.makeResponse(null, "Error when trying to get journal " + err)));
}

journalCtrl.latestIssue = (req, res) => {
  return Issue 
    .findAll({
      where: {
        journal_id: req.params.journalID
      },
      limit: 1,
      order: [['id', 'DESC']],
      include: [{
        model: Paper,
        as: 'papers'
      }]
    })
    .then((issues) => {

      return res.status(200).send(c.makeResponse(issues[0], null));
    })
    .catch((err) => res.status(404).send(c.makeResponse(null, "Error when trying to get journal " + err)));
}


module.exports = journalCtrl