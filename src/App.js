import React from "react";
import "./App.css";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import ScatterPlot from "./ScatterPlot";
import ScatterPlotTime from "./ScatterPlotTime";

const App = () => {
  return (
    <div className="App">
      <ul>
        <li> Bar Chart</li>
        <li><BarChart /></li>
        <li><hr style={{height:"25px" , width:"50%",backgroundColor:"black"}}/></li>
        <li>Iris</li>
        <li><ScatterPlot/></li>
        <li><hr style={{height:"25px" , width:"50%",backgroundColor:"black"}}/></li>
        <li>ScatterPlot Time</li>
        <li><ScatterPlotTime/></li>
        <li><hr style={{height:"25px" , width:"50%",backgroundColor:"black"}}/></li>
        <li>LineChart</li>
        <li><LineChart/></li>
        <li></li>
      </ul>
      
    </div>
  );
};

export default App;
