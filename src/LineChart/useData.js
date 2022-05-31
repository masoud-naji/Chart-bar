import { useEffect, useState } from "react";
import { csv } from "d3";

export const UseData = (csvUrl) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};
