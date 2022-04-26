import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function DropDown(props){
    const [value, setValue] = useState(props.initialValue)
    const handleChange = (newValue) => setValue(newValue)
    const labelId = "label-" + props.label.replace(" ", "-").toLowerCase()
    const selectId = "select-" + props.label.replace(" ", "-").toLowerCase()
    return (
        <FormControl fullWidth>
            <InputLabel id={labelId}> {props.label} </InputLabel>
            <Select
                labelId={labelId}
                id={selectId}
                label={props.label}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
                {
                    props.values.map( value => {
                        return <MenuItem value={value}> {value} </MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}