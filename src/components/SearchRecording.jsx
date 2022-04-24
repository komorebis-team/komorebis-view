import React from 'react'

import SearchBar from './SearchBar.jsx'
import SearchResults from "./SearchResults.jsx";

export default function SearchRecording(){
    return(
        <div className="InnerElement">
            <div className="SearchRecording">
                <h1 className="innerTitle"> Search </h1>
                <SearchBar/>
                <SearchResults/>
            </div>
        </div>
    )
}