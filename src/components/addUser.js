import React,{useRef, useState} from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { orangeButton } from '../GlobalCSS';



export const AddUser = () => {
  

  const users = [
    {
      value: 'Agent',
      label: 'agent',
    },
    {
      value: 'Supervisor',
      label: 'supervisor',
    },
    {
      value: 'Manager',
      label: 'manager',
    },
  ];
  const supervisors = [
    {
      value: 'Diego Urgell',
      label: 'Diego Urgell',
    },
    {
      value: 'Santiago Gabian',
      label: 'Santiago Gabian',
    },
    {
      value: 'Yusdivia Molina',
      label: 'Yusdivia Molina',
    },
  ];
 
    const [user, setUser] = React.useState('Agent');
    const [supervisor, setSupervisor] = React.useState('Diego Urgell');
  
    
    const handleChange = (event) => {
      setUser(event.target.value);
    };

    function navigate(){
      return <Navigate to="/admin/users"/>;
    }

  return (
    <div>
    <Box
      sx={{
        width: '50%',
        height: '80%',
        marginTop: '5vh',
        backgroundColor: 'white',
      }}
    >
        <h2 style={{textAlign:"center"}}>Add User</h2>
        <div className='upper_text_fields'>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Diego"
          style={{padding:"2%",width: '45%'}}
        />
        <TextField
          required
          id="outlined-required"
          label="Lastname"
          defaultValue="Jimenez"
          style={{padding:"2%",width: '45%'}}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{position:'relative','left':'13px',width: '45%'}}
        />
       
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          style={{position:'relative','left':'43px',width: '45%'}}
        />
        <br />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={user}
          onChange={handleChange}
          helperText="Please select the user"
          style={{padding:"2%",width: '45%'}}
        >
          {users.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          type="select"
          label="Select"
          value={supervisor}
          onChange={handleChange}
          helperText="Please select the user"
          style={{paddingTop:"2%",width: '45%'}}
        >
          {supervisors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="diego.urgell@aws.com"
          style={{position:'relative','left':'22%', padding:"2%",width: '45%'}}
        />
        <Button theme={orangeButton} onClick={navigate} style={{position:'relative','right':'50px','top':'78px'}} variant="contained">Submit</Button>

        </div>
    </Box>
    </div>
  )
}
