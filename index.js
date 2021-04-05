fetch = require('node-fetch')
FormData = require('form-data')

exports.getprofilebygt = async function(gamertag, authorization) {
    try {
    if(!gamertag) return 'null'
    var fetched = await fetch('https://profile.xboxlive.com/users/gt(' + gamertag + ')/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
    } catch {
        return 'null'
    }
}

exports.getprofilebyxuid = async function(gamertag, authorization) {
    try {
    if(!gamertag) return 'null'
    var fetched = await fetch('https://profile.xboxlive.com/users/xuid(' + gamertag + ')/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
    } catch {
         return 'null'
    }
}

exports.getownprofile = async function(authorization) {
    try {
    var fetched = await fetch('https://profile.xboxlive.com/users/me/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
    } catch {
        return 'null'
    }
}

exports.getprofilexuid = async function(gamertag, authorization) {
    try {
    var fetched = await fetch('https://profile.xboxlive.com/users/gt(' + gamertag + ')/profile/settings', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    return fetched.profileUsers[0].id
    } catch {
        return 'null'
    }
}

exports.getprofilegameclips = async function(xuid, authorization) {
    try {
    var fetched = await fetch('https://gameclipsmetadata.xboxlive.com/users/xuid(' + xuid + ')/clips', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    return fetched.gameClips
    } catch {
        return 'null'
    }
}

exports.getowngameclips = async function(authorization) {
    try {
    var fetched = await fetch('https://gameclipsmetadata.xboxlive.com/users/me/clips', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    return fetched.gameClips
    } catch {
        return 'null'
    }
}


exports.getprofilescreenshots = async function(xuid, authorization) {
    try {
    var fetched = await fetch('https://screenshotsmetadata.xboxlive.com/users/xuid(' + xuid + ')/clips?type=screenshots', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    return fetched.gameClips
    } catch {
        return 'null'
    }
}

exports.getownscreenshots = async function(authorization) {
    try {
    var fetched = await fetch('https://screenshotsmetadata.xboxlive.com/users/me/clips?type=screenshots', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    return fetched.gameClips
    } catch {
        return 'null'
    }
}

exports.getprofilerecentgames = async function(xuid, authorization) {
    try {
    var fetched = await fetch('https://titlehub.xboxlive.com/users/xuid(' + xuid + ')/titles/titlehistory/decoration/achievement,image', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en-GB" }}).then(response => response.json())
    return fetched.titles
    } catch {
        return 'null'
    }
}

exports.getownrecentgames = async function(authorization) {
    try {
    var fetched = await fetch('https://titlehub.xboxlive.com/users/me/titles/titlehistory/decoration/achievement,image', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en-GB" }}).then(response => response.json())
    return fetched.titles
    } catch {
        return 'null'
    }
}

exports.getownrecentgames = async function(authorization) {
    try {
    var fetched = await fetch('https://titlehub.xboxlive.com/users/me/titles/titlehistory/decoration/achievement,image', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en-GB" }}).then(response => response.json())
    return fetched.titles
    } catch {
        return 'null'
    }
}

exports.getallclubs = async function(authorization) {
    try {
    var xuid = await fetch('https://profile.xboxlive.com/users/me/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var fetched = await fetch('https://clubhub.xboxlive.com/clubs/xuid(' + xuid.profileUsers[0].id + ')/decoration/detail,settings', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en_us" }}).then(response => response.json())
    return fetched
    } catch {
        return 'null'
    }
}

exports.getclubbyid = async function(id, authorization) {
    try {
    var fetched = await fetch('https://clubhub.xboxlive.com/clubs/Ids('+ id +')/decoration/clubpresence,detail,settings,roster', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en_us" }}).then(response => response.json())
    return fetched
    } catch {
        return 'null'
    }
}

exports.fetchmessages = async function(xuid, authorization) {
    try {
    var fetched = await fetch('https://msg.xboxlive.com/users/xuid('+ xuid +')/inbox', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en_us" }}).then(response => response.json())
    return fetched
    } catch {
        return 'null'
    }
}

exports.deletemessage = async function(xuid, messageid, authorization) {
    try {
    var fetched = await fetch('https://msg.xboxlive.com/users/xuid('+ xuid +')/inbox/' + messageid, { method: 'DELETE', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en_us" }}).then(response => response.json())
    return fetched
    } catch {
        return 'null'
    }
}


exports.sendmessage = async function(xuid, message, authorization) {
    try {
    var fetched = await fetch('https://msg.xboxlive.com/users/xuid('+ xuid +')/outbox', { method: 'POST', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken, "Accept-Language": "en_us" }, body: { "messageText": message }}).then(response => response.json())
    return fetched
    } catch {
        return 'null'
    }
}

exports.makeauthurl = function(clientinfo) {
    try {
    return `https://login.live.com/oauth20_authorize.srf?client_id=${clientinfo.client_id}&redirect_uri=${encodeURIComponent(clientinfo.redirect_uri)}&response_type=code&scope=Xboxlive.signin+Xboxlive.offline_access`
    } catch {
        return 'null'
    }
}

exports.gettoken = async function(code, clientinfo) {
    try {
        var fetched = {}
        var data = new FormData();
        data.append('grant_type', 'authorization_code');
        data.append('code', code);
        data.append('client_id', clientinfo.client_id);
        data.append('scope', 'Xboxlive.signin Xboxlive.offline_access');
        data.append('redirect_uri', clientinfo.redirect_uri);
        data.append('client_secret', clientinfo.client_secret);
        var microsoft_code = await fetch('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', { method: 'POST', body: data }).then(response => response.json())
        fetched.refresh_token = microsoft_code.refresh_token
        var data_two = JSON.stringify({
          "RelyingParty": "http://auth.xboxlive.com",
          "TokenType": "JWT",
          "Properties": {
            "AuthMethod": "RPS",
            "SiteName": "user.auth.xboxlive.com",
            "RpsTicket": "d=" + microsoft_code.access_token,
          },
        })
        var xbox_pre_code = await fetch('https://user.auth.xboxlive.com/user/authenticate', { method: 'POST', body: data_two, headers: { 'x-xbl-contract-version': '0', 'Content-Type': 'application/json' } }).then(response => response.json())
        var data_three = JSON.stringify({
          "RelyingParty": "http://xboxlive.com",
          "TokenType": "JWT",
          "Properties": {
            "UserTokens": [xbox_pre_code.Token],
            "SandboxId": "RETAIL"
          }
        })
        var xbox_token_final = await fetch('https://xsts.auth.xboxlive.com/xsts/authorize', { method: 'POST', body: data_three, headers: { 'x-xbl-contract-version': '1', 'Content-Type': 'application/json' } }).then(response => response.json())
        fetched.token = xbox_token_final.Token
        fetched.UserHash = xbox_token_final.DisplayClaims.xui[0].uhs
        fetched.xuid = xbox_token_final.DisplayClaims.xui[0].xui
        fetched.gamertag = xbox_token_final.DisplayClaims.xui[0].gtg
    return fetched
    } catch(e) {
        console.log(e)
        return 'null'
    }
}