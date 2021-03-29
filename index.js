fetch = require('node-fetch')

exports.getprofilebygt = async function(gamertag, authorization) {
    if(!gamertag) return 'null'
    var fetched = await fetch('https://profile.xboxlive.com/users/gt(' + gamertag + ')/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,ModernGamertag,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
}

exports.getprofilebyxuid = async function(gamertag, authorization) {
    if(!gamertag) return 'null'
    var fetched = await fetch('https://profile.xboxlive.com/users/xuid(' + gamertag + ')/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,ModernGamertag,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
}

exports.getownprofile = async function(authorization) {
    if(!gamertag) return 'null'
    var fetched = await fetch('https://profile.xboxlive.com/users/me/profile/settings?settings=Gamertag,Gamerscore,GameDisplayPicRaw,AccountTier,XboxOneRep,PreferredColor,RealName,Bio,Location,ModernGamertag,RealNameOverride,Watermarks,IsQuarantined,DisplayedLinkedAccounts', { method: 'GET', headers: {'x-xbl-contract-version': '2', 'Authorization': 'XBL3.0 x=' + authorization.userHash + ';' + authorization.XSTSToken }}).then(response => response.json())
    var json = {}
    json.id = fetched.profileUsers[0].id
    json.isSponsoredUser = fetched.profileUsers[0].isSponsoredUser
    fetched.profileUsers[0].settings.forEach(settings => {if(settings.id != 'DisplayedLinkedAccounts') { json[settings.id] = settings.value } else { json[settings.id] = JSON.parse(settings.value) } });
    return json
}