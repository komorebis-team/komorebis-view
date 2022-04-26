import React from 'react'
import {centeredElement} from "../../GlobalCSS";

import {css} from '@emotion/css'

let errorStyle = css`
  ${centeredElement}; 
  width: 50vw; 
  height: 50vh;
`

export default function AuthError(){
    console.log("Executing auth error component")
    return (
        <div className={errorStyle}>
            Error while processing your request, you have not the necessary permissions. Close your browser and
            try again.
        </div>
    )
}