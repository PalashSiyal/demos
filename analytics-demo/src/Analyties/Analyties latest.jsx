import { React } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./analyties.css";
import { Chart } from "react-google-charts";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import DatatablePage from "./DatatablePage";

function Analytiesss() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const data = [
    ["Pizza", "Popularity"],
    ["Happy", 44],
    ["Average", 33],
    ["Neutral", 26],
    ["Bad", 22],
  ];
  const options = {
    sliceVisibilityThreshold: 0, // 20%
  };

  const buttons = [
    <Button key="one">Pie Chart</Button>,
    <Button key="two">Bar Chart</Button>,
  ];

  return (
    <>
      <div className="home">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4.5} sx={{display:'flex',justifyContent:'center'}}>
            <Item className="left">
              <div className="call-status">Call Status</div>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 12,
                  },
                  width: "29vw",
                }}
              >
                <ButtonGroup size="large" aria-label="large button group">
                  {buttons}
                </ButtonGroup>
              </Box>

              {/* <div className="pie-chart">
                    <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    
                    width={'100%'}
                    height={'400px'}
                     /></div> */}
            </Item>
          </Grid>
          <Grid item md={7.5}>
            {/* <Grid item xs={7} md={7.5}> */}
            <Item className="right">{/* <DatatablePage/> */}</Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Analytiesss;
