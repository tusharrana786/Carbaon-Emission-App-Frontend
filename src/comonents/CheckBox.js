import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../css/register.css"
import {theme} from './themes'
import { ThemeProvider } from "@emotion/react";

export default function CheckBoxCustom(){
    return(
    <FormGroup>
        <FormControlLabel
            sx={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16.8px",
            color: "#848489",
            marginBottom: "0",
            ".MuiTypography-root":{
                fontWeight: "500",
                fontSize: "14px"
            }
            }}
            control={
            <Checkbox
                defaultChecked
                color="success"
                sx={{
                height: "24px",
                width: "24px",
                borderRadius: "4px",
                marginLeft: "0.8%",
                marginRight: "0.6%",
                padding: "10px",
                ".MuiSvgIcon-root":{
                    height: "24px",
                    width: "24px"    
                }
                }}
            />
            }
            label="Anyone with your domain can join"
        />
        <span className="bottomicon" style={{ position: "relative", bottom: "4.3vh", left: "27.5%" }}>
            <i class="fa-solid fa-circle-info"></i>
        </span>
    </FormGroup>
    )
}