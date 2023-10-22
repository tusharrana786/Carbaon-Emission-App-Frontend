import Grid from "@mui/material/Grid"

function Container({height, bgcolor, title, sub}){
    return (
        <div className="greengrid" style={{height: height, width: "226px", backgroundColor: bgcolor}}>
            <p className="greengridtitle">{title}</p>
            <p className="greengridsub">{sub}</p>
        </div>
    )
}

export default function Test(){
    return(
        <Grid container spacing={0} width="1129px">
            <Grid xs={2.4} height="610px">
                <Container height="80px" bgcolor="#D5EBD0" title="Transportation" sub="~ 120 Mt CO2e"/>
                <Container height="80px" bgcolor="#A7D5A2" title="Chemicals" sub="~ 120 Mt CO2e"/>
                <Container height="126px" bgcolor="#83C47D" title="Other Extraction" sub="~ 120 Mt CO2e"/>
                <Container height="307px" bgcolor="#A7D5A2" title="Electricity" sub="~ 160 Mt CO2e"/>
            </Grid>
            <Grid xs={2.4} height="610px" >
                <Container height="88px" bgcolor="#83C47D" title="Extraction" sub="~ 20 Mt CO2e"/>
                <Container height="88px" bgcolor="#A7D5A2" title="Fumes" sub="~ 14 Mt CO2e"/>
                <Container height="84px" bgcolor="#D5EBD0" title="Inspection" sub="~ 120 Mt CO2e"/>
                <Container height="172px" bgcolor="#83C47D" title="Quality Control" sub="~ 155 Mt CO2e"/>
                <Container height="159px" bgcolor="#5EB357" title="Painting" sub="~ 132 Mt CO2e"/>
            </Grid>
            <Grid xs={2.4} height="610px">
                <Container height="261px" bgcolor="#5EB357" title="Warehouse Transportation" sub="~ 123 Mt CO2e"/>
                <Container height="133px" bgcolor="#D5EBD0" title="Storage" sub="~ 155 Mt CO2e"/>
                <Container height="200px" bgcolor="#83C47D" title="Thermal Insulation" sub="~ 110 Mt CO2e"/>
            </Grid>
            <Grid xs={2.4} height="610px">
                <Container height="124px" bgcolor="#C4E3BF" title="Freight Transport" sub="~ 80 Mt CO2e"/>
                <Container height="165px" bgcolor="#83C47D" title="Road Transport" sub="~ 99 Mt CO2e"/>
                <Container height="305px" bgcolor="#A7D5A2" title="Shipment" sub="~ 160 Mt CO2e"/>
            </Grid>
            <Grid xs={2.4} height="610px">
                <Container height="88px" bgcolor="#C4E3BF" title="Land Dump" sub="~ 6 Mt CO2e"/>
                <Container height="175px" bgcolor="#D5EBD0" title="Sewage Treatment" sub="~ 4 Mt CO2e"/>
                <Container height="331px" bgcolor="#5EB357" title="Incineration" sub="~ 12 Mt CO2e"/>
            </Grid>
        </Grid>
    )
}