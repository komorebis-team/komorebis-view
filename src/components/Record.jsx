import React, {useEffect, useState} from 'react'

import {css} from '@emotion/css'
import {centeredElement} from "../GlobalCSS";
import Grid from "@mui/material/Grid";
import {Button, Stack} from "@mui/material";

import Recorder from './Recorder'


let recordContainer = css`
  ${centeredElement};
  width: 40vw;
  height: 80vw;
  
  & * {
    border: solid black 1px;
  }
`

let ccpStyle = css`
    border: solid black 1px; 
`

export default function Record(){

    console.log(connect)

    useEffect(() => {
        let containerDiv = document.getElementById("connectCCP");
        let instanceURL = "https://komorebi-connect.my.connect.aws/ccp-v2/";

        try {
            console.log(connect)
            console.log(connect.core)
            console.log(connect.core.initCCP)
            connect.agentApp.initCCP(containerDiv, {
                ccpUrl: instanceURL,            // REQUIRED
                loginPopup: true,               // optional, defaults to `true`
                loginPopupAutoClose: true,      // optional, defaults to `false`
                loginOptions: {                 // optional, if provided opens login in new window
                    autoClose: true,              // optional, defaults to `false`
                    height: 600,                  // optional, defaults to 578
                    width: 400,                   // optional, defaults to 433
                    top: 0,                       // optional, defaults to 0
                    left: 0                       // optional, defaults to 0
                },
                region: "us-west-2",         // REQUIRED for `CHAT`, optional otherwise
                softphone: {                    // optional, defaults below apply if not provided
                    allowFramedSoftphone: true,   // optional, defaults to false
                    disableRingtone: false,       // optional, defaults to false
                },
                pageOptions: { //optional
                    enableAudioDeviceSettings: false, //optional, defaults to 'false'
                    enablePhoneTypeSettings: true //optional, defaults to 'true'
                },
                ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
                ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
                ccpLoadTimeout: 10000 //optional, defaults to 5000 (ms)

            });
        } catch(e){
            console.log(e)
        }
    })
    return (
        <div className={recordContainer}>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <div id="connectCCP" className={ccpStyle}> </div>
                </Grid>
                <Grid item xs={6}>
                    <Recorder/>
                </Grid>
            </Grid>
        </div>
    )
}

