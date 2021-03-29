fetch = require('node-fetch')

exports.random = function(gamertag, options) {
    if(!gamertag) return 'null'
  return (Math.random() * (max-min)) + min;
}