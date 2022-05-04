import React from 'react'
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import {css} from '@emotion/css'


export const innerTitle = css`
  text-align: center;
  margin: 3vw;
`

export const centeredElement = css`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const orangeButton = createTheme({
  shape: {
    borderRadius: 30,
  }, 
 
  palette: {
    primary: {
      main: orange[600],
      contrastText: '#fff',
     
    },

  },
});

export const circle = createTheme({
  shape:{
    borderRadius:30,
  }
});

export let fullHeightChild = css`
    height: 100%; 
    min-height: 100%;
`
