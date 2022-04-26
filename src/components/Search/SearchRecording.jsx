import React from 'react'

import {css} from '@emotion/css'

import SearchBar from './SearchBar.jsx'
import SearchResults from "./SearchResults.jsx";
import {innerTitle} from "../../GlobalCSS.js"


const searchRecording = css`
  width: 60vw;
  height: 80vh;
`

export default function SearchRecording(){
    return(
        <div>
            <div className={searchRecording}>
                <h1 className={innerTitle}> Search </h1>
                <SearchBar/>
                <SearchResults/>
            </div>
        </div>
    )
}