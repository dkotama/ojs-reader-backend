const journalCtrl = require("../controllers").journals;
const issueCtrl = require("../controllers").issues;

module.exports = (app) => {
  console.log('Starting at ' + process.env.PORT +' with ENV: ' + process.env.NODE_ENV);

  app.get('/api', (req, res) => res.status(404).send());

  //Journal
  app.get('/api/journals', journalCtrl.list);
  // app.post('/api/leagues',  authorize, leagueCtrl.create);
  // app.get('/api/leagues/:leagueId',  authorize, leagueCtrl.retrieve);
  // app.put('/api/leagues/:leagueId',  authorize, leagueCtrl.update);
  // app.delete('/api/leagues/:leagueId', authorize, leagueCtrl.destroy);

  //Issue
  app.get('/api/issues', issueCtrl.list);
  // app.post('/api/leagues',  authorize, leagueCtrl.create);
}