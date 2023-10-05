import Box from "@mui/material/Box";
import "../css/register.css"
import CreateOrganization from "./CreateOrganization";
import CreateProject from "./CreateProject";
import { useState } from "react";

export default function Register(){
    const [orgisset, setOrg] = useState(false)
    return(
        <>
            <Box display="flex" justifyContent="center" width="900px" height="auto" ml="auto" mr="auto" mt="60px">
                <span className={orgisset?"disabledtab":"activetab"}>1 Create an Organization</span>
                <span className="divider"><i class="fa-solid fa-greater-than"></i></span>
                <span className={orgisset?"activetab":"disabledtab"}>2 Create a Project</span>
            </Box>
            {orgisset? <CreateProject /> : <CreateOrganization setOrg = {setOrg}/>}
        </>
    )
}