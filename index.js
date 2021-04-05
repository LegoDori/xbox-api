fetch = require('node-fetch')

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
    var fetched = await fetch('https://profile.xboxlive.com/users/gt(' + gamertag + ')/profile/settings?settings=', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
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