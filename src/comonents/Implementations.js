import { Box, Grid, Typography } from "@mui/material";
import implementlogo from "./Images/implem.png"
import copylogo from "./Images/copy.svg"
import aws from "./Images/aws.svg"
import gc from "./Images/gc.svg"
import icld from "./Images/icloud.svg"
import azure from "./Images/Azure.svg"
import xero from "./Images/xero.svg"
import fb from "./Images/fb.png"
import qb from "./Images/qb.svg"
import zoho from "./Images/zoho.svg"
import ht from "./Images/ht.svg"
import arrow from "./Images/rightarrow.svg"
import demo from "./Images/demo.svg"
import dev from "./Images/devdoc.svg"
import expert from "./Images/expert.svg"

function RightGrid(){
    return(
        <Grid xs={4.5} height="91vh" display="flex" justifyContent={"center"} alignItems={"center"}>
            <img src={implementlogo} className="implemimg" height={"50%"} width="30%"/>
        </Grid>
    )
}

function Option({title, imgsrc}){
    return(
        <Grid item xs={3}>
            <div className={title?"optioncards":"optioncards hidden"}>
                {title && <><Grid xs={6} height={"40px"} width={"40px"}>
                    <div className="optcontainer"><img src={imgsrc} alt="aws logo"/></div>
                </Grid>
                <Grid xs={6} paddingRight={"10px"}>
                    <div className={title==="AWS"?"implemdata": "implemdata centered"}>
                    <p className="optioncardstitle">{title}</p>
                    {title==="AWS" && <p className="optioncardsoptional">Most Popular</p>}
                    </div>
                </Grid></>}
            </div>    
        </Grid>
    )
}

function Options({children, description}){
    return(
        <>
            {description && <p className="optionstext">{description}</p>}
            <Grid container spacing={3} marginBottom={"3%"}>
                {children}
            </Grid>
        </>
    )
}

function LeftGrid(){
    return(
        <Grid height="auto" xs={7.5} display="flex" flexDirection="column" alignItems="flex-start" paddingLeft="1.5%" paddingTop="3%" >
            <h1 className="implementheading">Let’s Get Started</h1> 
            <p className="description">The first step to get up and running with Emitbase is to get data into your project:</p>
            <p className="impopt">Implementation Options </p>    
            <span className="impopttext">Use<span className="implink">4d7012ce17c75cc…</span><img src={copylogo} className="copylogo"/><span>as your project token as you implement.</span></span>
            <span className="impopttext">Pro tip: Use a proxy when you implement.<a href="#">Learn more</a><span className="arrowicon"><i className="fa-solid fa-arrow-right"></i></span></span>      
            <Options description="CLOUD DATA">
                <Option title="AWS" imgsrc={aws}/>
                <Option title="Google Cloud" imgsrc={gc}/>
                <Option title="i-Cloud" imgsrc={icld}/>
                <Option title="Azure" imgsrc={azure}/>
            </Options>
            <Options description="INVOICING SYSTEMS">
                <Option title="Xero" imgsrc={xero}/>
                <Option title="Freshbooks" imgsrc={fb}/>
                <Option title="Quickbooks" imgsrc={qb}/>
            </Options>
            <Options description="LOGISTICS">
                <Option title="Zoho" imgsrc={zoho}/>
                <Option title="High Touch" imgsrc={ht}/>
            </Options>

            <span className="intoptionstxt">All Platforms & Integration Options<span><img src={arrow}/></span></span>
            <p className="impopt">Not ready to Implement?</p>
            <Options>
                <Option title="View Demo Project" imgsrc={demo}/>
                <Option title="Developer Documentation" imgsrc={dev}/>
                <Option title="Hire an Expert" imgsrc={expert}/>    
            </Options>
        </Grid>
    )
}

export default function Implementation(){
    return(
        <Box sx={{ flexGrow: 1 }} height="auto">
            <Grid container>
                <LeftGrid />
                <RightGrid />
            </Grid>
        </Box>
    )
}