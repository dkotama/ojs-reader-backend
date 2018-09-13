const multer = require('multer');
const commons = require('../lib').commons;


module.exports = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },

  filename: (req, file, cb) => {
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    cb(null, commons.sha1(new Date()) + ext);
  }
});