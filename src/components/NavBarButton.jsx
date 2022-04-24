import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBarButton(props){
    const iconMapping = {
        "Search": <SearchIcon fontSize="large"/>,
        "Users": <PersonIcon fontSize="large"/>,
        "Tags": <StyleIcon fontSize="large"/>,
        "Statistics": <AutoGraphIcon fontSize="large"/>,
        "Record": <OndemandVideoIcon fontSize="large"/>,
        "Help": <HelpIcon fontSize="large"/>,
        "Settings": <SettingsIcon fontSize="large"/>
    }

    return (
        <div className="navBarButton">
            {iconMapping[props.name]}
            <p> {props.name} </p>
        </div>
    );
}