import React from 'react'

import Box from "@mui/material/Box";
import {Chip, Grid} from "@mui/material";
import {css} from '@emotion/css';


const searchResultContainer = css`
  width: 80%;
  margin: auto;
`

const searchResult = css`
  display: flex;
  flex-flow: row wrap;
  
  & > div{
    margin-left: 2vw;

  }
`

export default function SearchResult(props){
    return (
        <div className={searchResultContainer}>
            <Box sx={{ flexGrow: 1, boxShadow:3, backgroundColor:"white", padding: "2vw"}}>
                <div className={searchResult}>
                    <img src="https://via.placeholder.com/150"/>
                    <div>
                        <p> Agent ID: 9807 </p>
                        <p> Name: Santiago Gabian </p>
                        <p> Date: 08/15/2022 </p>
                        <Grid container spacing={3} padding={1} style={{marginBottom: "2vw"}}>
                        {
                            props.tags.map(value => {
                                return (
                                    <Grid item>
                                        <Chip label={value}/>
                                    </Grid>
                                )
                            })
                        }
                        </Grid>
                    </div>
                </div>
            </Box>
        </div>
    )
}