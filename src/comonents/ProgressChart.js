import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "../css/charts.css"
import "../css/register.css"

import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F7F7F7;"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#3BA974"
  }
}));

function sortlist(data){
    data.sort((a,b)=>{
        return b[1]-a[1];
    })
}


function Category({category, color, length, actval}){
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 16,
        borderRadius: 4,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: "#F7F7F7;"
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: color
        }
      }));
      return(
        <Box display="flex" paddingTop={"1%"} paddingLeft={"1%"}>  
            <span className="category categorytxt">{category}</span>
            <Box width="463px" display="flex">
              <Box width={length+"%"}>
                <BorderLinearProgress variant="determinate" value={100} />
              </Box>
              <span className="categorytxt number">{actval}</span>
            </Box>
        </Box>
      )
}

// Inspired by the former Facebook spinners.

export default function ProgressChart() {
  const colors = ["#3BA974", "#FF9357", "#FEBBB2", "#5E5CB6", "#72BEF4", "#B2586E","#5BB7AF"]
  const data = [["Electricity",531], ["Fuel",614], ["Enterprise",905], ["Manufacturing",413], ["Shipping",500], ["Wastage",201], ["Miscellaneous",77]]  
  sortlist(data)
  return (
    <>
    <Box display="flex" paddingTop={"1%"} paddingLeft={"1%"}>
      <span className="category categoryheading">Category</span>
      <span className="category categoryheading">Total Emissions</span>    
    </Box>
    {
        data.map((element, index)=>{
            return (<Category category={element[0]} color={colors[index]} length={(element[1]/data[0][1])*100} actval={element[1]}/>)
        })
    }
    </>

  );
}
