import React, { useState, useEffect } from "react";
import { scaleBand, scaleLinear, max, format } from "d3";
import { UseData } from "./BarChart/useData";
import { AxisLeft, AxisBottom } from "./BarChart/Axises";
import { Marks } from "./BarChart/Marks";

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 60, left: 200 };
const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const BarChart = () => {
  const data = UseData(csvUrl);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;
  const xAxisTiCkFormat = (n) => format(".2s")(n).replace("G", "B");

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTiCkFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + 50}
          textAnchor="middle"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTiCkFormat}
        />
      </g>
    </svg>
  );
};

export default BarChart;
