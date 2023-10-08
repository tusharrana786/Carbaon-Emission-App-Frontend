import Box from "@mui/material/Box"
import "../css/register.css"
import gif from "./Images/gif.png"

export default function RegisterSuccess(){
    return(
        <>
            <Box height={"auto"} width={"auto"} display={"flex"} justifyContent={"center"} marginTop={"6%"}>
                <img src={gif} alt="gif"/>
                <iframe src="https://lottie.host/?file=9e0d5229-77d4-4273-838e-7a8e78c83825/gGvaSaWPrf.json"></iframe>
            </Box>
            <Box height={"auto"} width={"60%"} display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={"auto"} marginRight={"auto"}>
                <h1 className="heading">Congratulations 🎉</h1>
                <p className="welcometext">You have successfully created your organisation <span className="welcometextbold">Safal Polymers</span>, and your first project <span className="welcometextbold">⚡Electricity Bengaluru</span></p>
                <button className="getstartedbtn">Let's get started</button>
            </Box>
        </>
    )
}