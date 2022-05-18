import React from "react";
import {centeredElement, innerTitle, orangeButton} from "../GlobalCSS";
import DropDown from "./General/DropDown";
import {css} from "@emotion/css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const settings = css`
${centeredElement};
  display:flex;
  width: 60vw;
  height: 80vw;
`
const categories = ["Troubleshooting", "Sales", "Customer Service"];
const tags = ["Model A", "Model B", "Model C", "Model X"];
export default function Survey() {
    return (
        <div>
            <div className={settings}>
                <h1 className={centeredElement}>Survey</h1>
                <Grid container spacing={12}>
                    <Grid item xs={12}  >
                        <Paper elevation={3}>
                            <div>
                                <DropDown label="Categoty" values={categories}/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper elevation={3}>
                            <div>
                                <DropDown label="Tags" values={tags}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}