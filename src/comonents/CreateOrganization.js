import RegisterTitle from "./RegisterTitile"
import Box from "@mui/material/Box";
import "../css/register.css"
import {theme} from "./themes"
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxCustom from "./CheckBox";

function handleNextClick(setOrg){
    setOrg((org)=>{return !org});
}

export default function CreateOrganization({setOrg}){
    const [checked, isChecked] = useState(true)
    return(
        <>
          <ThemeProvider theme={theme}>
            <RegisterTitle 
                heading={"Name Your Organization"} 
                description={"An organization is the home for all your projects, teams, users and billing."}
            />
            <Box display="flex" flexDirection="column" width="900px" height="auto" ml="auto" mr="auto" mt="10px">
                <label for="org">Organization Name <i class="fa-solid fa-circle-info"></i></label>
                <input id="org" placeholder="Your organisation name (ex: Scaler Academy)" className="org"></input>
                <CheckBoxCustom />
                <button className="registerbutton" onClick={()=>{handleNextClick(setOrg)}}>Next</button>
            </Box>
          </ThemeProvider>
        </>
    )
}