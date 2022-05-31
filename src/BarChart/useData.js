import { useEffect, useState } from "react";
import { csv } from "d3";

export const UseData = (csvUrl) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);
  return data;
};
 