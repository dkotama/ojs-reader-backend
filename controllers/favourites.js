const Paper = require("../db/models").papers;
const Users = require("../db/models").users;
const c = require("../lib/commons");

const ctrl = {}

ctrl.list = (req, res) => {
  let userId = req.headers['user_id'];

  // if (!userId) {
  //   return res.status(422).send({error: "Please Provide User ID"});
  // }

  return Users.findById(userId)
            .then((user) => {
              if (!user) {
                res.status(400).send({error: "User not found"});
              }

              user.getFavorites()
                .then((favorites) => res.status(200).send(favorites))
                .catch((error) => res.status(500).send("Unable to get Favorites"))
            })
            .catch((err) => res.status(400).send({error: "Error when getting user : " + err}));
}


ctrl.add = (req, res) => {
  // let userId = req.query.user_id;
  let userId = req.headers['user_id'];
  let paperId = req.body.paper_id;


  if (!userId) {
    return res.status(422).send(c.makeResponse(null, "Please Provide User ID"));
  }

  return Paper.findById(paperId)
        .then((paper) => {
          paper.hasFollowers(userId)
            .then((follower) => {
              if (follower) {
                res.status(422).send(c.makeResponse(null, "Already Favorited"));
              } else {
                paper.addFollowers(userId)
                  .then((success) => res.status(200).send(c.makeResponse("success", null)))
                  .catch((error) => res.status(500).send({error: "Unable to add Favorites : " + error }))
              }
            })
            .catch((error) => res.status(500).send({error: "Unable to check favorites : " + error }))
        })
        .catch((err) => res.status(400).send({error: "Error when getting Paper data: " + err}));

}

ctrl.remove = (req, res) => {
  let userId = req.headers['user_id'];
  let paperId = req.body.paper_id;

  if (!userId) {
    return res.status(422).send(c.makeResponse(null, "Please Provide User ID"));
  }

  return Paper.findById(paperId)
        .then((paper) => {
          paper.hasFollowers(userId)
            .then((follower) => {
              if (!follower) {
                res.status(422).send(c.makeResponse(null, "Not Favorited"));
              } else {
                paper.removeFollowers(userId)
                  .then((success) => res.status(200).send(c.makeResponse("success", null)))
                  .catch((error) => res.status(500).send({error: "Unable to remove Favorites : " + error }))
              }
            })
            .catch((error) => res.status(500).send({error: "Unable to check favorites : " + error }))
        })
        .catch((err) => res.status(400).send({error: "Error when getting Paper data: " + err}));

}



module.exports = ctrl