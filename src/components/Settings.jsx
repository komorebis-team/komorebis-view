import React from "react";
import { css } from "@emotion/react";
import { Button, Switch,Box,Radio,FormControlLabel,FormControl,RadioGroup,Stack,Typography,TextField, Grid} from "@mui/material";
import { centeredElement } from "../GlobalCSS";
import { innerTitle,theme } from "../GlobalCSS";
import { orange } from "@mui/material/colors";
import SaveIcon from '@mui/icons-material/Save';
import { InputAdornment } from "@mui/material";

const settings = css`
${centeredElement};
display: flex;
width: 120vw;
height: 120vh;

`




export default function Settings(){
    return(
        <div>
            <div className={settings}>
      
                <h1 className= {centeredElement}>System Configuration</h1>
                <Box className= {centeredElement} sx={{ width:800,height:450 , boxShadow:3, backgroundColor:"white", padding: "2vw"}}>
                <FormControl>
                    <h3>Data Compression</h3>
                    <Box className= {centeredElement} sx={{width:400,height:40, boxShadow:0,backgroundColor:"#E8E8E8"}}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="Data Compression"
                        defaultValue="120 MB"
                        
                        >
                        <FormControlLabel value="120 MB" control={<Radio sx={{color: "default",'&.Mui-checked': {color: orange[600],},}} />} label="120 MB" />
                        <FormControlLabel value="240 MB" control={<Radio sx={{color: "default",'&.Mui-checked': {color: orange[600],},}} />} label="240 Mb" />
                        <FormControlLabel value="600 MB" control={<Radio sx={{color: "default",'&.Mui-checked': {color: orange[600],},}}/>} label="600 MB" />
                    </RadioGroup>
                    </Box>
                </FormControl>
                <FormControl>
                <h3>Encrypt Videos</h3>
                <Box className= {centeredElement} sx={{width:400,height:40, boxShadow:0,backgroundColor:"#E8E8E8"}}>
                <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <Switch sx={{color:"default",'& .MuiSwitch-switchBase.Mui-checked': {color: orange[600],},'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {backgroundColor: orange[600],
                }}}>
                </Switch>
      
        <Typography>On</Typography>
      </Stack>
               </Box>
            </FormControl>
            <h3>Video Duration</h3>
            <FormControl>
          
           
            <Grid container spacing={8}sx={{paddingLeft:"16vw"}}>
           <Grid item xs={4} > <TextField
             type="number"
              name="Min"
              label="Minimum"
              suffix= "min"
              variant="filled"
              InputProps={{
                endAdornment:
                <InputAdornment position="end">Min</InputAdornment>

              }}
              defaultValue={0}
          />
          </Grid>
            
           <Grid item xs={4}> <TextField
             type="number"
              name="Min"
              label="Maximum"
              suffix= "min"
              variant="filled"
              InputProps={{
                endAdornment:
                <InputAdornment position="end">Min</InputAdornment>

              }}
              defaultValue={0}
          />
          </Grid>
          
          </Grid>
            </FormControl>

            <FormControl>
                <h3>Allow Notes</h3>
                <Box className= {centeredElement} sx={{width:400,height:40, boxShadow:0,backgroundColor:"#E8E8E8"}}>
                <Stack direction="row" spacing={1} alignItems="center">
        <Typography>No</Typography>
        <Switch sx={{color:"default",'& .MuiSwitch-switchBase.Mui-checked': {color: orange[600],},'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {backgroundColor: orange[600],
                }}}>
                </Switch>
      
        <Typography>Yes</Typography>
      </Stack>
               </Box> 
            </FormControl>
            
            

            <Button  theme={theme} mat-button color="primary" variant="contained" startIcon={<SaveIcon />} style={{alignSelf: "flex-end", marginRight: '12vw', marginTop: '0.5vw'}}>
  Save 
</Button>

            
            </Box>
        
            </div>
     </div>
    )
}