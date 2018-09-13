const League = require("../db/models").League;
const storageCfg = require("../config").multer;
const multer = require("multer");
const upload = multer({ storage: storageCfg }).fields([{name: 'logo', maxCount: 1,}, {name: 'illust', maxCount: 1}]);
const c = require("../lib").commons;
const constants = require("../lib").constants;

const leagueCtrl = {}

const ERROR = constants.ERROR_TYPE;

leagueCtrl.create = (req, res) => {
  var request = {};

  upload(req, res , err => {
    if (err) {
      return res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to process multipart form data - " + err));
    }

    request.name = req.body.name

    if (req.files) {
      let logo = '';
      let illust = '';

      if (req.files['logo']) {
        logo = req.files['logo'][0];
      }

      if (req.files['illust']) {
        illust = req.files['illust'][0];
      }

      request.logoUrl = logo.filename || "";
      request.illustUrl =  illust.filename || "";
    }

    return League.create(request)
          .then((league) => res.status(200).send(c.makeResponse(league)))
          .catch((err) => res.status(400).send(c.makeResponse(nill, ERROR.INTERNAL_ERR, "Error on insert to database - " + err)))
  });
}

leagueCtrl.list = (req, res) => {
  return League.findAll()
          .then((leagues) => res.status(200).send(c.makeResponse(leagues)))
          .catch((err) => res.status(400).send(c.makeResponse(nill, ERROR.INTERNAL_ERR, "Error getring Leagues - " + err)))
}

leagueCtrl.retrieve = (req, res) => {
  return League
    .find({
      where: {
        id: req.params.leagueId
      }
    })
    .then((league) => {
      if (!league) {
        return res.status(404).send(c.makeResponse(null, ERROR.BAD_REQUEST, "League ID not Exist"));
      }

      return res.status(200).send(c.makeResponse(league));
    })
    .catch((err) => res.status(404).send(c.responseError(null, ERROR.INTERNAL_ERR, "Error when trying to get league - " + err)));
}

leagueCtrl.update = (req, res) => {

  return League
    .find({
      where: {
        id: req.params.leagueId
      }
    })
    .then((league) => {
      if (!league) {
        return res.status(404).send(c.makeResponse(null, ERROR.BAD_REQUEST, "League ID not Exist"));
      }

      var request = {};

      upload(req, res , err => {
        if (err) {
          return res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to process multipart form data - " + err));
        }

        request.name = req.body.name || league.name

        if (req.files) {
          let logo = '';
          let illust = '';

          if (req.files['logo']) {
            logo = req.files['logo'][0];
          }

          if (req.files['illust']) {
            illust = req.files['illust'][0];
          }

          request.logoUrl = logo.filename || league.logoUrl;
          request.illustUrl =  illust.filename || league.illustUrl;
        }

        return league.update(request)
              .then((league) => res.status(200).send(c.makeResponse(league)))
              .catch((err) => res.status(400).send(c.makeResponse(nill, ERROR.INTERNAL_ERR, "Error on insert to database - " + err)))
      });

    })
    .catch((err) => res.status(404).send(c.responseError(null, ERROR.INTERNAL_ERR, "Error when trying to get league - " + err)));
}

leagueCtrl.destroy = (req, res) => {
  return League 
    .find({
      where: {
        id: req.params.leagueId
      }
    })
    .then((league) => {
      if (!league) {
        return res.status(404).send(c.makeResponse(null, ERROR.BAD_REQUEST, "League id not exist"));
      }

      return league.destroy()
        .then((deleted) => res.status(200).send(c.makeResponse("success")))
        .catch((err) => res.status(404).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to delete League")));
    })
    .catch((err) => res.status(404).send(c.responseError(null, ERROR.INTERNAL_ERR, "Error when trying to get League")));
}

module.exports = leagueCtrl