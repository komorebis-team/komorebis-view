import React from 'react'

import {css} from '@emotion/css'
import {GridColDef} from '@mui/x-data-grid';
import Button from "@mui/material/Button";

import Catalogue from "./General/Catalogue";
import {innerTitle, centeredElement} from "../GlobalCSS"


const usersCatalogue = css`
  ${centeredElement}; 
  width: 60vw;
  height: 80vh;

`

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5, type: 'number' },
    { field: 'name', headerName: 'Name', flex: 1, type: 'string' },
    { field: 'status', headerName: 'Status', flex: 1, type: 'string' },
    { field: 'role', headerName: 'Role', flex: 1, type: 'string'},
];
const  rows = [
    { id: 1001, name: 'Selena Flores Jiménez', status: 'Active', role: 'Manager' },
    { id: 1002, name: 'Diego Jiménez Urgell', status: 'Active', role: 'Supervisor' },
    { id: 1003, name: 'Álvaro Olivia Vermudez', status: 'Inactive', role: 'Agent' },
    { id: 1004, name: 'Amanda Celeste Cuesta', status: 'Active', role: 'Agent' },
    { id: 1005, name: 'Teresa Isaura Busto', status: 'Inactive', role: 'Supervisor' },
    { id: 1006, name: 'Diego Ramírez Pineda', status: 'Inactive', role: 'Agent' },
    { id: 1007, name: 'Leopoldo Luciano Salinas', status: 'Active', role: 'Agent' },


];

export default function UsersCatalogue(){
    return (
        <div>
            <div className={[usersCatalogue]}>
                <h1 className={innerTitle}> User Administration </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />
                <Button variant="contained" style={{alignSelf: "flex-end", marginRight: '6vw', marginTop: '3vw'}}> + ADD </Button>
            </div>
        </div>
    )
}