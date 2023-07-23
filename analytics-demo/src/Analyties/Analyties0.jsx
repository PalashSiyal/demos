import React from 'react'
import "./analyties.css"
import { Chart } from "react-google-charts";
import DataTablePage from './DatatablePage'

export const data = [
  ["title","Test"],
  ["Happy", 37],
  ["Sad", 24],
  ["Neutral", 25],
  ["Bad", 26],
  
];

export const options = {
  legend: {
    position: 'none',    
  }
};

function  Analyties0() {
  
  return (
    <>
        <div className="home">
          <div className="head-er">
            <div className="logo-up">
            </div>
            <div className="head-desc"></div>
          </div>
        <div className="partition">
          <div className="left-partition">
            <p className="title">Call Status</p>
            <div className="title2">
              <div className="one">
              <div className="one-text">Pie Chart</div>
              </div>
              <div className="two-text">Bar Chart</div>
              <div className="piechart">
              <Chart
      chartType="PieChart"
      data={data}
      options={{
        legend: {
          position: 'none',
        }
      }}
      width={"100%"}
      height={"400px"}
    />
              </div>
            <div className="left-bottom">
              <div className="hap-neu">
              <div className="happy-dot"></div>
              <div className="happy">Happy</div>

              <div className="neutral-dot"></div>
              <div className="neutral">Neutral</div>
              </div>

              <div className="ave-bad">
              <div className="average-dot"></div>
              <div className="average">Average</div>

              <div className="bad-dot"></div>
              <div className="bad">Bad</div>
              </div>
            </div>
            </div>
          </div>
          <div className="right-partition">
          <div className="right-partition-small">
            {/* <input placeholder='search students...' className="search-bar"/> */}
            <DataTablePage/>
            <div className="no"></div>
            <div className="student-name"></div>
            <div className="haapy"></div>
            <div className="neutrall"></div>
            <div className="aver"></div>
            <div className="bad"></div>
            <div className="new"></div>
          </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Analyties0

