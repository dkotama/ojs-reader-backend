const Match = require("../db/models").Match;
const Team = require("../db/models").Team;
const League = require("../db/models").League;
const c = require("../lib").commons;
const constants = require("../lib").constants;

const matchCtrl = {};

const ERR = constants.ERROR_TYPE;

matchCtrl.list = (req, res) => {
  let _limit = 10;
  let page = req.param('page') || 1

  return Match
    .findAndCountAll({
      limit: _limit,
      offset: _limit * (page - 1),
      order: [['id', 'DESC']],
      attributes: { exclude: defaultExclude },
      include: defaultInclude
    })
    .then((result) => {
      if (result.rows.length < 1) {
        res.status(200).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Page not found"))
      }

      var response = {};
      response.page = page;
      response.matches = result.rows;

      res.status(200).send(c.makeResponse(response));

    })
    .catch((error) => res.status(404).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error when trying to fetch data")));
};

matchCtrl.retrieve = (req, res)  => {
  return Match
    .find({
      where: {
        id: req.params.matchId
      },
      attributes: { exclude: defaultExclude },
      include: defaultInclude
    })
    .then((match) => {
      if (!match) {
        return res.status(404).send(c.makeResponse(null, ERR.NOT_FOUND, "Match not found"));
      }

      return res.status(200).send(c.makeResponse(match));
    })
    .catch((error) => res.status(404).send(c.makeResponse(null, ERR.INTERNAL_ERR)));
};

matchCtrl.prediction = (req, res)  => {
  let userId = req.param('user_id');
  let matchId = req.param('match_id');

  if (!userId || !matchId) {
    return res.status(400).send(c.makeResponse(null, ERR.BAD_REQUEST, "Please provide match id & user id"));
  }

  // return res.status(200).send({
  //   message: "hello"
  // });

  return Match
    .find({
      where: {
        id: matchId
      },
      attributes: { include: ['id', 'prediction']},
    })
    .then((match) => {
      if (!match) {
        return res.status(404).send(c.makeResponse(null, ERR.NOT_FOUND, "Match not found"));
      }
      let result = {};

      result.id = match.id;
      result.prediction = match.prediction;

      return res.status(200).send(c.makeResponse(result));
    })
    .catch((error) => res.status(404).send(c.makeResponse(null, ERR.INTERNAL_ERR)));
};

matchCtrl.create = (req, res) => {
  var request = {};

  request.homeTeamId = req.body.home_id;
  request.awayTeamId = req.body.away_id;
  request.leagueId = req.body.league_id;
  request.bestOf = req.body.best_of;
  
  if (!request.homeTeamId || !request.awayTeamId) {
    return res.status(400).send(c.makeResponse(null, ERR.BAD_REQUEST, "Please fill in all team"));
  } 

  if (request.homeTeamId == request.awayTeamId) {
    return res.status(400).send(c.makeResponse(null, ERR.BAD_REQUEST, "Home Team & Away Team should not same"));
  } 

  request.prediction = req.body.prediction;
  request.winner =  req.body.winner;
  request.date = req.body.date

  return Match
    .create(request)
    .then(match => res.status(200).send(c.makeResponse(match)))
    .catch(err => res.status(400).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error when creating match"))); 
}

matchCtrl.update = (req, res) => {

  return Match
    .find({
      where: {
        id: req.params.matchId
      },
      attributes: { exclude: ['LeagueId']}
    })
    .then((match) => {
      if (!match) {
        return res.status(404).send(c.makeResponse(null, ERR.NOT_FOUND, "Match not Found"));
      }

      var request = {};
      request.homeTeamId = req.body.home_id || match.homeTeamId;
      request.awayTeamId = req.body.away_id || match.awayTeamId;
      request.leagueId = req.body.league_id || match.league_id;
      request.bestOf = req.body.best_of || match.best_of;

      if ((request.homeTeamId == request.awayTeamId)) {
        return res.status(400).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Home & Away cannot have same id"));
      } 

      request.prediction = req.body.prediction || match.prediction;
      request.winner =  req.body.winner || match.winner;
      request.date = req.body.date || match.date;

      // return res.status(400).send(c.makeResponse(match, null));
      return match 
        .update(request)
        .then(match => res.status(200).send(c.makeResponse(request)))
        .catch(err => res.status(400).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error when trying to update: " + err))); 
    })
    .catch((error) => res.status(404).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error get Match: " + error)))
}

matchCtrl.destroy = (req, res) => {
  return Match
    .find({
      where: {
        id: req.params.matchId
      }
    })
    .then((match) => {
        if (!match) {
          return res.status(400).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Match Not Exist"));
        } 

        return match
          .destroy()
          .then((deleted) => res.status(200).send(c.makeResponse("success")))
          .catch(err => res.status(400).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error when trying to delete"))); 

      })
    .catch((error) => res.status(404).send(c.makeResponse(null, ERR.INTERNAL_ERR, "Error get Match")))
}

let defaultHome = {
    model: Team,
    attributes: {exclude: ['createdAt', 'updatedAt']},
    as: 'home',
    paranoid: false
}

let defaultAway = {
    model: Team,
    attributes: {exclude: ['createdAt', 'updatedAt']},
    as: 'away',
    paranoid: false
}

let league = {
    model: League,
    attributes: {exclude: ['createdAt', 'updatedAt']},
    as: 'league'
}

const defaultExclude = ['homeTeamId', 'awayTeamId', 'leagueId', 'LeagueId', 'prediction'];
const defaultInclude = [defaultHome, defaultAway, league];

module.exports = matchCtrl;