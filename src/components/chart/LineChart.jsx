import React, { useState } from "react";
import "../../styles.css";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from "@devexpress/dx-react-chart-material-ui";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { features } from "../../constant";
import { Button } from "antd";
import { setSelectedFeat } from "../../features/data/dataSlice";

export const LineChart = ({lineChartData}) => {
  const { analyticsData ,selectedFeat} = useSelector((store) => store.data);
  const dispatch= useDispatch()
 
  return (
    <div>
      <div className="feat-container">
        <label>Select Feature</label>
        {features.map((item) => {
          return (
            <Button
              type={selectedFeat === item ? "primary" : "default"}
              onClick={() => dispatch(setSelectedFeat(item))}
            >
              {item}
            </Button>
          );
        })}
      </div>{" "}
      <Paper>
        <Chart data={lineChartData}>
          <ValueAxis />
          <ArgumentAxis />
          <LineSeries valueField={selectedFeat} argumentField="date" />
          <ZoomAndPan />
        </Chart>
      </Paper>
    </div>
  );
};
