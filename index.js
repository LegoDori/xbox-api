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