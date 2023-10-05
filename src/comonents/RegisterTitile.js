import "../css/register.css"
import Box from "@mui/material/Box";

export default function RegisterTitle({heading, description}){
    return(
        <Box display="flex" flexDirection="column" alignItems="center" width="900px" height="auto" ml="auto" mr="auto" mt="40px">
            <h1 className="heading">{heading}</h1>
            <p className="description">{description}</p>
        </Box>
    )
}