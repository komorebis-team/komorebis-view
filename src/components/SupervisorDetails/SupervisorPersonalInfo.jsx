
import React from "react";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown2 from '../General/DropDown2'
import { Avatar, Menu, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function SupervisorPersonalInfo() {
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '25vh' }}
            >
                <Grid item xs={12} >

                    <Avatar src="https://via.placeholder.com/200" sx={{ width: 120, height: 120 }} />
                </Grid>

            </Grid>


            <Grid alignItems="stretch" container spacing={0} padding={2} pt={1}>


                <Grid item xs={4} >
                    <Box ml={3} >
                        <TextField id="standard-basic" label="ID" defaultValue="123" variant="standard" InputProps={{
                            readOnly: true,
                        }} />

                        <DropDown2
                            label="Status"
                            values={["Active", "Inactive"]}
                        />
                        <Box mb={1}>
                            <TextField id="standard-basic" label="Number of agents" defaultValue="20" variant="standard" InputProps={{
                                readOnly: true,
                            }} />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={8}>
                    <Box ml={3}>
                        <TextField id="standard-basic" label="Name" defaultValue="Diego Enrique Jiménez Urgell" variant="standard" InputProps={{
                            readOnly: true,
                        }} style={{ width: '90%' }} />
                        <Box mt={1}>
                            <TextField id="standard-basic" label="Email" defaultValue="deigo@gmail.com" variant="standard" InputProps={{
                                readOnly: true,
                            }} style={{ width: '90%' }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>



            <Grid container spacing={1} alignItems="center" justifyContent="center" mt={0.5}>

                <Grid item xs={4} mb={3} >

                    <Button size="medium" variant="contained" color="success" startIcon={<SaveIcon />}>
                        Save
                    </Button>
                </Grid>
                <Grid item xs={4} mb={3} >
                    <Button size="medium" variant="contained" color="error" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </Grid>


            </Grid>


        </div>


    )
}

