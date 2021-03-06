import React from 'react'

import Button from "@mui/material/Button";
import {css} from '@emotion/css'

import Catalogue from "./General/Catalogue";

import {innerTitle, centeredElement,orangeButton} from "../GlobalCSS"

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const tagsCatalogue = css`
  ${centeredElement}; 
  width: 60vw;
  height: 80vh;
`

export default function TagsCatalogue(){
    let columns = [
        { field: 'name', headerName: 'Name', flex: 1, type: 'string' },
        { field: 'category', headerName: 'Category', flex: 1, type: 'string' },
    ];
    let  rows = [
        { id: 1, name: 'Model A', category: 'Sales' },
        { id: 2, name: 'Model B', category: 'Sales'},
        { id: 3, name: 'Hang-Up Call', category: 'General' },
        { id: 4, name: 'Not interested', category: 'General'},
        { id: 5, name: 'Need follow up call', category: 'General'},
        { id: 6, name: 'Fixing', category: 'Troubleshooting' },
        { id: 7, name: 'Sales Opportunity', category: 'Sales' },
    ];
    return (
        <div>
            <Grid item mt={4} >
            <Paper elevation={3}>
            <div className={tagsCatalogue}>
                <h1 className={innerTitle}> Tag Configuration </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />

                <Button theme={orangeButton} variant="contained" style={{alignSelf: "flex-end", marginRight: '6vw', marginTop: '1vw',marginBottom:'2vw'}}> + ADD </Button>

            </div>
            </Paper>
            </Grid>
        </div>
    );
}
