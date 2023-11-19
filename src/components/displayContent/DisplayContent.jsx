import { Tabs } from "antd";
import React from "react";
import { LineChart } from "../chart/LineChart";
import { BarChart } from "../chart/BarChart";
import { useSelector } from "react-redux";
import { features } from "../../constant";

export const DisplayContent = () => {
  const { analyticsData ,selectedFeat} = useSelector((store) => store.data);

  const onChange = () => {
  };
  const manipulateData = () => {
    const featureData = analyticsData;
    const dateMap = {};

    const featureMap = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0
    };

    for (let key in featureData) {
      const data = featureData[key].data;
      const day = data.Day;
      console.log(day, "day");
      if (dateMap[day]) {
        features.forEach((feature) => {
          featureMap[feature] =
            Number(featureMap[feature]) + Number(data[feature]);

          dateMap[day][feature] =
            Number(dateMap[day][feature]) + Number(data[feature]);
        });
      } else {
        dateMap[day] = { date: day };
        features.forEach((feature) => {
          featureMap[feature] =
            Number(featureMap[feature]) + Number(data[feature]);

          dateMap[day][feature] = Number(data[feature]);
        });
      }
    }
    const chartData = {lineChartData:Object.values(dateMap) , barChartData: featureMap}
    return chartData
  };

  const allChartData = manipulateData()
  const items = [
    {
      key: "1",
      label: "Line Chart",
      children: <LineChart lineChartData={allChartData.lineChartData}/>,
    },
    {
      key: "2",
      label: "Bar Chart",
      children: <BarChart barChartData={allChartData.barChartData}/>,
    },
  ];
 
  return(
    <div>
      {" "}
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
