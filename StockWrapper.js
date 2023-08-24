import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-native';
import ChartWebView from './ChartWebView';

const StockChart = () => {
  const [chartData, setChartData] = useState(null);
  const [webViewReady, setWebViewReady] = useState(false);

  // Simulated fetch function
  const fetchStockData = useCallback(() => {
    // Replace this with your actual API call or data fetching mechanism.
    setTimeout(() => {
      const newData = [{
        time: "2018-03-28",
        value: 154
      },
      {
        time: "2018-03-29",
        value: 154.2
      },
      {
        time: "2018-03-30",
        value: 155.60001
      },
      {
        time: "2018-04-02",
        value: 156.25
      },
      {
        time: "2018-04-03",
        value: 156.25
      },
      {
        time: "2018-04-04",
        value: 156.05
      },
      {
        time: "2018-04-05",
        value: 158.05
      },
      {
        time: "2018-04-06",
        value: 157.3
      },
      {
        time: "2018-04-09",
        value: 144
      },
      {
        time: "2018-04-10",
        value: 144.8
      },
      {
        time: "2018-04-11",
        value: 143.5
      },
      {
        time: "2018-04-12",
        value: 147.05
      },
      {
        time: "2018-04-13",
        value: 144.85001
      },
      {
        time: "2018-04-16",
        value: 145.39999
      },
      {
        time: "2018-04-17",
        value: 147.3
      },
      {
        time: "2018-04-18",
        value: 153.55
      },
      {
        time: "2018-04-19",
        value: 150.95
      },
      {
        time: "2018-04-20",
        value: 149.39999
      },
      {
        time: "2018-04-23",
        value: 148.5
      },
      {
        time: "2018-04-24",
        value: 146.60001
      },
      {
        time: "2018-04-25",
        value: 144.45
      },
    ];
      setChartData(newData);
    }, 1000);
  }, []);

  useEffect(() => {
    if (webViewReady) {
      fetchStockData();
    }
  }, [webViewReady, fetchStockData]);

  return (
    <>
      <ChartWebView chartData={chartData} onWebViewReady={() => setWebViewReady(true)} />
      <Button title="Refresh Data" onPress={fetchStockData} />
    </>
  );
};

export default StockChart;
