import React from 'react'

import {css} from '@emotion/css'
import Button from "@mui/material/Button";

import Catalogue from "./General/Catalogue";

import {innerTitle, centeredElement,theme} from "../GlobalCSS"


import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const usersCatalogue = css`
  ${centeredElement}; 
  width: 60vw;
  height: 80vh;

`

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5, type: 'number', renderCell: (params) => (
            <Link to="supervisorInfo">{params.value}</Link>
        ) },
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
            <Grid item mt={4} >
                <Paper elevation={3}>
            <div className={[usersCatalogue]}>
                <h1 className={innerTitle}> User Administration </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />

                <Button theme={theme} variant="contained" style={{alignSelf: "flex-end", marginRight: '6vw', marginTop: '3vw'}}> + ADD </Button>

            </div>
            <Outlet/>
                </Paper>
            </Grid>
        </div>
    )
}