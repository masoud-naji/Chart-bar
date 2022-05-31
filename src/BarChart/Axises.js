export const AxisBottom = ({ xScale, innerHeight ,tickFormat}) =>
  xScale.ticks().map((tickValue) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line x1="0" y1="0" x2="0" y2={innerHeight} stroke="black" />
      <text style={{ textAnchor: "middle" }} dy=".71em" y={innerHeight + 3}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));

export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((country) => (
    <g className="tick" key={country}>
      <text
        key={country}
        style={{ textAnchor: "end" }}
        dy=".32em"
        x={-3}
        y={yScale(country) + yScale.bandwidth() / 2}
      >
        {country}
      </text>
    </g>
  ));
