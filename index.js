fetch = require('node-fetch')

exports.getprofile = async function(gamertag, options) {
    if(!gamertag) return 'null'
    return await fetch('https://profile.xboxlive.com/users/gt(' + gamertag + ')/profile/settings?settings=' + options , { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + xbox_token_final.DisplayClaims.xui[0].uhs + ";" + xbox_token_final.Token}}).then(response => response.json())
}