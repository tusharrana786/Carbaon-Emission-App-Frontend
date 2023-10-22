import Grid from "@mui/material/Grid"
import "../css/charts.css"
import magic from "./Images/magic.svg"
import plus from "./Images/plus.svg"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import UpperBoxlogo from "../comonents/Images/yt.svg"
import eml1 from "../comonents/Images/emissionlogo1.svg"
import eml2 from "../comonents/Images/emissionlogo2.svg"
import eml3 from "../comonents/Images/emissionlogo3.svg"
import increase from "../comonents/Images/increase.svg"
import decrease from "../comonents/Images/decrease.svg"
import Divider from '@mui/material/Divider';


function BoardHeadings({cls, logo, title}){
    return (
        <span className="sidebartext"><span className={cls}><img src={logo}/></span><span className="ml-2">{title}</span></span>
    )
}

function SideBar(){
    const pboards = ["🌈 Org-wide Insights", "🎯 Core Company KPIs", "📠 Electronics", "🚗 Employee Commute"]
    const yboards = ["⚡Electricity Bengaluru"]
    return(
        <div className="sidebar">
            <BoardHeadings logo={magic} title="Discover" cls="discoverlogo"/>
            <BoardHeadings logo={plus} title="New Board" cls="addlogo"/>
            <SideBarDropDown heading="Pinned Boards" datalist={pboards}/>
            <SideBarDropDown heading="Your Boards" datalist={yboards}/>
        </div>
    )
}

function SideBarDropDown({heading, datalist}){
    const [open, setOpen] = useState(true);

    const handleClick = () => {
    setOpen(!open);
    };

    return (
        <List
        sx={{maxWidth: 360, bgcolor: 'background.paper', width: "auto", position:"relative", right:"7.5%"}}
        component="nav"
        >
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={heading} sx={{"& .css-10hburv-MuiTypography-root":{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#626266",
                            lineHeight: "19.2px"
            }}}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {datalist.map((element, i)=>{
                return(
                    <ListItemButton>
                        <ListItemText primary={element} sx={{"& .css-10hburv-MuiTypography-root":{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#626266",
                            lineHeight: "16.8px"
                        }}}/>
                    </ListItemButton>
                )
            })}
            
            </List>
        </Collapse>
        </List>
  );
}

function UpperBox(){
    return (
        <div className="upperbox">
            <img src={UpperBoxlogo}/>
            <div>
                <p className="upperpara">Welcome! You are viewing a Emitbase demo</p>
                <p className="lowerpara">Start building with your own data by clicking “Implement Emitbase.”</p>
            </div>
            <button className="leftbtn">Implement Emitbase</button>
            <button className="rightbtn">Watch Tutorial</button>
        </div>
    )
}

function CardTop({title, imgsrc, change, cls, sub}){
    return(
        <div className={cls}>
            <div>
                <span  className="emissioncardtext"><img className="down" src={imgsrc}/><span className="test">{title}</span></span>
                <p className="emissioncardsecond">{sub}</p>
            </div>
            {change && (<div className="ml-auto">
                <span className="inctext"><span className={change<0?"up":"inctext"}>{change<0?Math.abs(change)+"%":change+"%"}</span><img className="down" src={change<0?decrease:increase}/></span>
                <p className="emissioncardsecond">vs last month</p>
            </div>)}
        </div>
    )
}

function Card({title, imgsrc, change, maindata, secdata}){
    return (
        <Grid item xs={4}>
            <div className="emissioncard">
                <CardTop title={title} imgsrc={imgsrc} change={change} cls="rowdiv" sub="Last 12 months"/>
                <div className="bottomdiv">
                    <h1>{maindata}</h1>
                    <p>{secdata}</p>
                </div>
            </div>
        </Grid>
    )
}

function EmissionCards(){
    return(
        <Grid container spacing={3} marginTop={"0.1%"}>
            <Card title="Total Emissions" imgsrc={eml1} change={2} maindata="283,324" secdata="Mt CO2e"/>
            <Card title="Emission Equivalent" imgsrc={eml2} maindata="283" secdata="return flights from NYC to DEL"/>
            <Card title="Offset Cost" imgsrc={eml3} change={-24} maindata="₹80.35 Cr" secdata="saved from carbon offset"/>
        </Grid>
    )
}

function Main(){
    return (
      <> 
        <UpperBox />
        <EmissionCards />
      </> 
    )
}

export default function DashBoard(){
    return(
        <Grid container spacing={0}>
            <Grid xs={2}>
                <SideBar />
            </Grid>
            <Grid xs={10} padding="2%">
                <Main />
            </Grid>
        </Grid>
    )
}