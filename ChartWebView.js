import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const ChartWebView = ({ chartData, onWebViewReady }) => {
  const webViewRef = useRef(null);
  useEffect(() => {
    if (webViewRef.current && chartData) {
      webViewRef.current.postMessage('INIT');
      webViewRef.current.postMessage(JSON.stringify(chartData));
    }
  }, [chartData]);

  const chartHtml = `
  <!DOCTYPE html>
  <html>
  <head>
  <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
  </head>
  <body>
  <div id="chart-container" style="width: 100%; height: 300px;"></div>
  <script>
  const chart = LightweightCharts.createChart(document.getElementById('chart-container'), {
    width: '100%',
    height: 300,
  });

          const lineSeries = chart.addLineSeries({
            color: '#4A90E2',
            lineWidth: 2,
        });

        chart.applyOptions({
            layout: {
                backgroundColor: '#fff',
                textColor: '#333',
            },
            grid: {
                vertLines: {
                    color: '#b3c7e6',
                },
                horzLines: {
                    color: '#b3c7e6',
                },
            },
        });
          // Notify React Native when the WebView is ready
          window.ReactNativeWebView.postMessage('READY');

          // Listen for messages from React Native
          window.addEventListener('message', event => {


            if (event.nativeEvent.data === 'INIT') {
          window.ReactNativeWebView.postMessage('DATA_LOADED');

          return
            }


            console.log('Message received from React Native:');
            const data = JSON.parse(event.data);
            lineSeries.setData(data);
          });
        </script>
      </body>
    </html>
  `;

  return (

    <WebView
    ref={webViewRef}
    javaScriptEnabled={true}
      originWhitelist={['*']}
      source={{ html: chartHtml }}
      style={{ height: 300, width: '100%', backgroundColor: 'black' }}
      onMessage={(event) => {
        console.log('insidee.e...', event)
        if (event.nativeEvent.data === 'READY') {
          onWebViewReady();
        }
        if (event.nativeEvent.data === 'DATA_LOADED') {
          console.log('ela pri batko');
          // onWebViewReady();`
        }
      }}
    />
  );
};

export default ChartWebView;
