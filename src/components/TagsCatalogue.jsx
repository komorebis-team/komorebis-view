import React from 'react'

import { GridColDef } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {css} from '@emotion/css'

import Catalogue from "./General/Catalogue";
import {innerTitle, centeredElement,theme} from "../GlobalCSS"

const tagsCatalogue = css`
  ${centeredElement}; 
  width: 60vw;
  height: 80vh;
`

export default function TagsCatalogue(){
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1, type: 'string' },
        { field: 'category', headerName: 'Category', flex: 1, type: 'string' },
    ];
    const  rows = [
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
            <div className={tagsCatalogue}>
                <h1 className={innerTitle}> Tag Configuration </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />
                <Button theme={theme} variant="contained" style={{alignSelf: "flex-end", marginRight: '6vw', marginTop: '3vw'}}> + ADD </Button>
            </div>
        </div>
    )
}
