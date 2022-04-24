import React from 'react'
import Box from "@mui/material/Box";
import {Chip, Grid} from "@mui/material";

export default function SearchResult(props){
    return (
        <div className="SearchResultContainer">
            <Box sx={{ flexGrow: 1, boxShadow:3, backgroundColor:"white", padding: "2vw"}}>
                <div className="SearchResult">
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