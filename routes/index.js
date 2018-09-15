const journalCtrl = require("../controllers").journals;
const issueCtrl = require("../controllers").issues;
const favCtrl = require("../controllers").favourites;
const paperCtrl = require("../controllers").papers;
const memberCtrl = require("../controllers").members;

const mw = require("../middlewares/middleware");

module.exports = (app) => {
  console.log('Starting at ' + process.env.PORT +' with ENV: ' + process.env.NODE_ENV);

  app.get('/api', (req, res) => res.status(404).send());

  //Journal
  app.get('/api/journals', journalCtrl.list);
  app.get('/api/journals/:journalID', journalCtrl.retrieve);
  app.get('/api/journals/:journalID/latest', journalCtrl.latestIssue);

  //Issue
  app.get('/api/issues/:journalID', issueCtrl.listByJournal);

  //Paper
  app.get('/api/papers/:paperID', paperCtrl.retrieve);

  //Favorites
  app.get('/api/favourites', mw.userCheck , favCtrl.list);
  app.post('/api/favourites', mw.userCheck, favCtrl.add);
  app.delete('/api/favourites', mw.userCheck, favCtrl.remove);

  //Members
  app.post('/api/login', memberCtrl.login);
  app.post('/api/register', memberCtrl.register);
}