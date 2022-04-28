import React, {useState} from 'react'

import {css} from '@emotion/css'

import {centeredElement} from "../GlobalCSS";
import Recorder from './Recorder'
import Grid from "@mui/material/Grid";
import {Button, Stack} from "@mui/material";

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
    return (
        <div className={recordContainer}>
            <Grid container direction="row">
                <Grid item>
                    <div className={ccpStyle}>
                        <p> Here we will have the CCP embedded in our website. </p>
                    </div>
                </Grid>
                <Grid item>
                    <Recorder/>
                </Grid>
            </Grid>
        </div>
    )
}

