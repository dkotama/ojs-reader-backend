const Team = require("../db/models").Team;
const storageCfg = require("../config").multer;
const multer = require("multer");
const upload = multer({ storage: storageCfg }).single('logo');
const c = require("../lib").commons;
const constants = require("../lib").constants;
const uploadTo = "images" 

const teamCtrl = {}

const ERROR = constants.ERROR_TYPE;

teamCtrl.create = (req, res) => {
  upload(req, res, function(err) {
      if (err) {
        return res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to post image - " + err));
      }

      var request = {};

      request.name = req.body.name;
      request.origin = req.body.origin;

      var file = req.file

      if (file) {
        request.logoUrl = file.filename;
      } else {
        request.logoUrl = null;
      }

      console.log(req.body);

      return Team
        .create(request)
        .then((team) => res.status(200).send(c.makeResponse(team)))
        .catch((err) => res.status(404).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to create Team")));
  });
}

teamCtrl.update = (req, res) => {
  upload(req, res, function(err) {
      if (err) {
        return res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to post image"));
      } 

      return Team.find({
        where: {
          id: req.params.teamId
        }
      }).then((team) => {
        if (!team) {
          return c.makeResponse(null, ERROR.INTERNAL_ERR, "Team Not Found");
        }

      var request = {}

      request.logoUrl = team.logoUrl;
      request.name = req.body.name || team.name;
      request.origin = req.body.origin || team.origin;

      if (req.file) {
        request.logoUrl = req.file.filename;
      }
      
      return team
        .update(request)
        .then((updated) => res.status(200).send(c.makeResponse(updated)))
        .catch((err) => res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Update Team Error")));
    })
    .catch((err) => res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when trying to get Team")));
});
}

teamCtrl.list = (req, res) => {
  return Team
    .findAll()
    .then((teams) => res.status(200).send(c.makeResponse(teams)))
    .catch((err) => res.status(400).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "")));
}

teamCtrl.retrieve = (req, res) => {
  return Team
    .find({
      where: {
        id: req.params.teamId
      }
    })
    .then((team) => {
      if (!team) {
        return res.status(404).send(c.makeResponse(null, ERROR.BAD_REQUEST, "Id Team not Exist"));
      }

      return res.status(200).send(c.makeResponse(team));
    })
    .catch((err) => res.status(404).send(c.responseError(null, ERROR.INTERNAL_ERR, "Error when trying to get team")));
}

teamCtrl.destroy = (req, res) => {
  return Team
    .find({
      where: {
        id: req.params.teamId
      }
    })
    .then((team) => {
      if (!team) {
        return res.status(404).send(c.makeResponse(null, ERROR.BAD_REQUEST, "Team id not exist"));
      }

      return team.destroy()
        .then((deleted) => res.status(200).send(c.makeResponse("success")))
        .catch((err) => res.status(404).send(c.makeResponse(null, ERROR.INTERNAL_ERR, "Error when tryint to delete Team")));
    })
    .catch((err) => res.status(404).send(c.responseError(null, ERROR.INTERNAL_ERR, "Error when trying to get Team ")));
}

module.exports = teamCtrl