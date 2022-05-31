export const Marks = ({ data, yScale, xScale, xValue, yValue ,tooltipFormat}) =>
  data.map((d) => (
    <rect
      className="mark"
      key={yValue(d)}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
<title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));
