import React from 'react'

import {Grid, FormControl} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DropDown from './DropDown'

export default function SearchBar(){
    return (
        <div>
            <Box sx={{ flexGrow: 1, boxShadow:3, backgroundColor:"white"}}>
                <Grid container spacing={3} padding={1}>
                    <Grid item xs={3}>
                        <DropDown
                            label="Search By"
                            values={["Tag", "Category", "Agent", "Date"]}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <DropDown
                            initialValue={""}
                            label="Value"
                            values={["Model S", "Model X"]}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <DropDown
                            initialValue={""}
                            label="Tags"
                            values={["Tag 1", "Tag 2", "Tag 3"]}
                        />
                    </Grid>
                    <Grid item xs={0.5}> </Grid>
                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <Button variant="contained" fullWidth> Buscar </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}