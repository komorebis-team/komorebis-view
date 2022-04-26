import React from 'react'
import { css } from '@emotion/css'

import NavBarAvatar from "../NavBar/NavBarAvatar";

const komorebiHeader = css`
  width: 100vw;
  height: 8vh;
  background-color: #2b3340;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box;
  padding: 0 7vw;
  max-height: 8vh;
`

const komorebiLabel = css`
  font-size: calc(15px + 0.5vw);
  font-weight: bold;
`

export default function Header(){
    return (
        <div className={komorebiHeader}>
            <div> <p className={komorebiLabel}> Komorebi Connect </p> </div>
            <div>
                <p>
                    <NavBarAvatar/>
                </p>
            </div>
        </div>
    )
}