import RegisterTitle from "./RegisterTitile"
import "../css/register.css"
import Box from "@mui/material/Box";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";

function ControlledOpenSelect({time, setTime}) {
    const [open, setOpen] = useState(false);
    const data = ["India/Kolkata (GMT 5:30)", "Abc/Xyz (GMT 2:30)", "Xyz/Abc (GMT 9:30)"]
  
    const handleChange = (event) => {
      console.log(time)
      setTime(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <FormControl className="org" sx={{width: "100%"}}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={time}
            onChange={handleChange}
            sx={{height: "51px", borderRadius: "8px", border: "1px solid #E6E6E6", fontWeight: 500, fontSize: "16px", lineHeight: "19.2px"}}
            >
            {data.map((elem, i)=>{
                   return (<MenuItem value={elem}>
                        {elem}
                    </MenuItem>)
            })}
          </Select>
        </FormControl>
      </div>
    );
  }

export default function CreateProject(){
    const [time, setTime] = useState("India/Kolkata (GMT 5:30)");
    return(
        <>
        <RegisterTitle 
            heading={"Create Your Project"} 
            description={"Projects live within organisation data, and can be thought as containers for your Emitbase data"}
        />
        <Box display="flex" flexDirection="column" width="900px" height="auto" ml="auto" mr="auto" mt="10px">
                <label for="org">Project Name <i class="fa-solid fa-circle-info"></i></label>
                <input id="org" placeholder="e.g. ⚡ Bengaluru Electricity" className="org"></input>
                <label className="timezonelabel">Select Your Timezone</label>
                <ControlledOpenSelect time={time} setTime={setTime}/>
                <button className="createbutton">Create</button>
        </Box>    
        </>
    )
}