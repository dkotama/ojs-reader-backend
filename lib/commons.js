// const crypto = require('crypto');

module.exports = {
  // responseError(statusCode, message) {
  //   var response = {};

  //   var error = {}
  //   error.status = statusCode;
  //   error.message = message;

  //   response.error = error

  //   return JSON.stringify(response);
  // },

  // sha1(input) {
  //   return crypto.createHash("sha1").update(JSON.stringify(input)).digest("hex");
  // },

  // serverPath(expressReq) {
  //   return expressReq.protocol + '://' + expressReq.get('host') + '/';
  // },

  // makeResponse(result, errType = null, description = null) {
  //   const defaultErr = {
  //     code: null,
  //     title: null,
  //     description
  //   };
  
  //   return {
  //     status: +!errType,
  //     error: {
  //       ...defaultErr,
  //       ...errType
  //     },
  //     result
  //   };
  // },


  makeResponse(result, errDesc) {
    let snum = result ? 1 : 0;

    return {
      status: snum,
      error: errDesc,
      data: result
    };
  }

  // makeResponseSuccess() {
  //   var response = {};
  //   response.status = 1;
  //   response.error = null;
  //   response.result = "success";
  //   // response.error.description = null;

  //   return response;
  // }
}