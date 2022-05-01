
import React from "react";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import SupervisorPersonalInfo from './SupervisorPersonalInfo.jsx';
import SupervisorAgents from "./SupervisorAgents.jsx";

export default function SupervisorInfo() {
    return (
        <div>
            <h1>Supervisor Information</h1>
            <Grid alignItems="stretch" container spacing={3} padding={5} pt={0}>
                <Grid item md={5} xs={12}>
                    <Paper elevation={3}>
                        <SupervisorPersonalInfo />


                    </Paper>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Paper elevation={3}>
                        <SupervisorAgents />
                    </Paper>
                </Grid>
            </Grid>



        </div>


    )
}

