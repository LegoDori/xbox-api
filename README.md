# xbox-api

A Simple Xbox API Wrapper for javascript

## Installation
```shell
$ npm i https://github.com/RomanMender/xbox-api
```

## Example

~~~JS
var xbox = require('xbox-api')

var auth = {
        userHash: "11039641451625114727" ,
        XSTSToken: "eyJlbmMiOiJBMTI4Q0JDK0hTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJ4NXQiOiIxZlVBejExYmtpWklFaE5KSVZnSDFTdTVzX2cifQ.EVUwstAv_Vr4S6JQS3eEKQTrdqivPYCAWUtLuWTsBajNCmaKNtAIMUdMhypmpALCuwZg9JmIH9Bj7JU83zSxaS6urk6N93iOccfTsHXIcyplfewyk6CtHxCxX6jghEoA5LZLnci_xe8kKM6te1EYA8rBiCPdI-sFTqBaolyDbQA.o5mvE37qC24UvSDEzkzTMA.Z9WCgzwTGlgUdPE7DvDG5aC3vB5-zylnfHGVdKShP_668leL3GIWYCUROlVLraETJwZhYzWWF8kZvPsbV8bHHfdrlMeXa4zFUqB69zc2Xo7t8mfY9HVIZ5kKecI_d22BoK_mI0WFhD1QtGcU9njz9BI3BS4alxCTdGYsjVajmLqDP-gXOkj67TIRmG8hbM9yIQfCQkLJbEsXSWDR8vts8AM0PcK5AkeB9k_HSc1UWOHEAN3F2L23l1eqAdaFkRYlUfMk24SgC5uADsduGQGDHu82TRR9rE6w7roaefSl2bCwjQEzfZ86a-MnXaHfeq_6Dmi2wHK9l_qiFdhTLygU7GqY1fB9Kzfeu8vVj0NLOuIe5NKmKqOqNjCsDxRcRoKh7m4IJ_JlB22xXKd6Vk5onjm-RpYWNe1wIWB7jUTTjPadNKrUSacfrS5H7CwB6Tp0mhq1l21f_V0_4YYa2DmsGGNTvxb8xbMHKqM7H1pKMzKERSwcrEitnnsH69eoB_uVWFvTIeddl4qx_O1oIMl8XDeDqrDPZMxZ1zes8VsNqULJlOlxWe8zmCLyuACtKvhKllLiaAuuz93BD7MpRRHxvkID8QAt9J3-BpBnT0gFmVMjzz3N5_3jQuK7kSDlfE7DyC8lCFGVYnUxzd21oNWa8oWTHUpHBNbX13IUfiNt_YrmICdDEDa0JMo6F-fcSCXpaK1RJAGIzEzz0Nwfn3l_JOZuGU8ATpar3yR3MahLrvVcO_XuMILGnvAv3HTfFJZMu-YBrv2WY8jAPZ2R1QEh96bHja_9lbWLN7T4mqiUdgVrhKJb_n4kO3IVDtP756Lud1Dsh6xcJkCoFUp0dzsx2Cd7iCyZeXSxuwbcibPobMGNUMslyN8gzE_NTNqIdMhe2Kbf-M9TC1OKkF6NkLAyDKeWxkSQxN4Wru4So9oJkBaqG3mz615LYR_KrInyN3L4Ya6UN9dHx6VVDLjLkFPcAY9bCOFiZbUXMP2c11qznxnCO6v4Lj-HiF7VAXdtVJbNi18Dpfw8uzIJC9AEAmHc84jdYjkwD3fLSnTM2_qPwfT8wy4bhuqFX7y6zEvlfFP4W5x_Bg-dPVx1UU0knQ0I49GiLhv9bfdp_VSdl9f0g59BUe6VhLPz8RZivk1kIokKyMZ7jl6svyDvBDwb4q43wUWop8zcXGOE1WBVfracRswsUWsh8c56u23fGjE--39Q-l35gC4uCeH_IwqF7pkeSi6ThhrZBdKgad1jgTeP5wd2MLfCUS3J_SrV0xsg-upAzzjamdMsJju6OYbzN5sAh8pw74lJkFHcA_C7nCXUNgDUtrLxuF5FRLfGsqjlsEk5yUNZAzMuJiIMXYjnTAX0w_w7WYVSSzvpAZdaYiFQetBghR70YUZtT3xi4q1WZUNj8cl8qHOgmtvcB_2M4qUEDQje2zkc7wolQpqOzYfluP_1QFmzHgSfXONWAmKFls12DBkJtnGi6gsm5ZU2S3CtmA.Ui1dbEardw_cL0ETJ6BZBxC5vbHTMFhR_qAK_O7mVYY"
}
    
xbox.getprofilebygt("RomanMender3164", auth).then(finish => console.log(finish))
~~~

## Documentation

| Api Call  | Syntax  | Returns  |
| ------------ | ------------ | ------------ |
| Get Profile From Gamertag  | getprofilebygt(gamertag, auth)  | JSON  |
| Get Profile From Xuid  | getprofilebygt(xuid, auth)  | JSON  |
| Get Own Profile  | getownprofile(auth)  | JSON  |
| Get Xuid From Gamertag  | getprofilexuid(gamertag, auth)  | String  |
| Get Clips From Xuid  | getprofilegameclips(xuid, auth)  | JSON  |
| Get Own Clips  | getowngameclips(auth)  | JSON  |
| Get Screenshots From Xuid  | getprofilescreenshots(xuid, auth)  | JSON  |
| Get Own Screenshots  | getownscreenshots(auth)  | JSON  |
| Get Recent Games From Xuid  | getprofilerecentgames(xuid, auth)  | JSON  |
| Get Own Recent Games  | getownrecentgames(auth)  | JSON  |
| Get Current Clubs  | getallclubs(auth)  | JSON  |
| Get Club by ID | getclubbyid(id, auth)  | JSON  |
| Gets Messages* | fetchmessages(xuid, auth)  | JSON  |
| Sends a Message* | sendmessage(xuid, message, auth)  | JSON  |
| Deletes a Message* | deletemessage(xuid, messageid, auth)  | JSON  |

*Note: This endpoint doesnt work unless you have Xbox Gold

# Xbox Oauth2

## Example

~~~JS
const express = require('express')
const app = express()
app.listen(3000)

var xbox = require('xbox-api')

var clientinfo = {
   "client_id": "2295a725-0097-47eb-ba1d-c79dca4606e1",
   "redirect_uri": "http://localhost:3000/xbox/auth/callback",
   "client_secret": "p53ug8Us5eygCCB-pST.Ut-_42E3Em62zg"
}

app.get('/xbox', (req, res) => {
    res.redirect(xbox.makeauthurl(clientinfo))
})

app.get('/xbox/auth/callback', (req, res) => {
    xbox.gettoken(req.query.code, clientinfo).then(finish => res.send(finish))
})
~~~
    

| Api Call  | Syntax  | Returns  |
| ------------ | ------------ | ------------ |
| Get Token from Oauth2  | gettoken(code, clientinfo)  | JSON  |
| Get Token from Oauth2 refresh  | refreshtoken(refresh, clientinfo)  | JSON  |
