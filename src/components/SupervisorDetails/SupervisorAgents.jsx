import React from "react";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Catalogue from "../General/Catalogue";
import { GridColDef } from '@mui/x-data-grid';
import { css } from '@emotion/css'
import { innerTitle, centeredElement } from "../../GlobalCSS"
import Button from "@mui/material/Button";
import { Link } from '@mui/material';

const tagsCatalogue = css`
  ${centeredElement}; 
  width: 50vw;
  height: 80vh;
  
`

export default function SupervisorAgents() {

    const columns = [
        { field: 'id', headerName: 'ID', render: rowData => <div>{console.log("hola")}</div> },
        { field: 'name', headerName: 'Name', flex: 3, type: 'string' },
    ]
    const rows = [
        { id: '123', name: 'Selena Quintanilla' },
        { id: '344', name: 'Selena Quintanilla' },
        { id: '127643', name: 'Selena Quintanilla' },
        { id: '3577', name: 'Selena Quintanilla' },
        { id: '732', name: 'Selena Quintanilla' },
        { id: '64', name: 'Selena Quintanilla' },
        { id: '677', name: 'Selena Quintanilla' },
    ];
    return (
        <div>
            <div className={tagsCatalogue}>
                <h1 className={innerTitle}> Assigned Agents </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    )
}