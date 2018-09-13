let ERROR_TYPE = {
  NETWORK_ERR : {
    code: 0,
    title: "Network Error"
  },
  INTERNAL_ERR : {
    code: 1,
    title: "Internal Error" 
  },
  NOT_FOUND: {
    code: 2,
    title: "Result Not Found" 
  },
  BAD_REQUEST: {
    code: 3,
    title: "Bad Request" 
  }
};

let WINNER = {
  HOME: "home",
  AWAY: "away"
}

module.exports =  { ERROR_TYPE, WINNER }