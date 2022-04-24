import React from 'react'

import {Grid} from "@mui/material";
import css from '@emotion/css';

import SearchResult from "./SearchResult";
import DropDown from "./DropDown";

const searchResults = css`
    margin-top: 2vw;
`

export default function SearchResults(){
    return (
        <div className={searchResults}>
            <Grid container spacing={3} padding={1} style={{marginBottom: "2vw"}}>
                <Grid item xs={10}/>
                <Grid item xs={2}>
                    <DropDown
                        initialValue={""}
                        label="Sort By"
                        values={["Date", "Agent", "Tag"]}
                    />
                </Grid>
            </Grid>
            <SearchResult
                tags={["Model S", "Troubleshooting"]}
            />
        </div>
    )
}

