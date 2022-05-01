import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DropDown2(props) {
    const [value, setValue] = useState("Active")
    const handleChange = (newValue) => setValue(newValue)
    const labelId = "label-" + props.label.replace(" ", "-").toLowerCase()
    const selectId = "select-" + props.label.replace(" ", "-").toLowerCase()
    return (
        <FormControl variant="standard" sx={{ mb: 2, mt: 1, minWidth: 100 }}>
            <InputLabel id={labelId}> {props.label} </InputLabel>
            <Select
                labelId={labelId}
                id={selectId}
                label={props.label}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                inputProps={{ readOnly: true }}

            >
                {
                    props.values.map(value => {
                        return <MenuItem value={value}> {value} </MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}