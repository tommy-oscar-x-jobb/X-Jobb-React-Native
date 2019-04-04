import ChartView from 'react-native-highcharts';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';


export const getGraph = (sData, strTitle, timeStamp) => {
  //console.log(timeStamp);
  var conf = {
    chart: {
      type: 'spline',
      zoomType: 'x',
      events: {
        load: function() {
          var renderTimeStamp = new Date().getTime();
          var logg = "Time elapsed: " + renderTimeStamp
          var label = this.renderer.label(logg, 100, 120).attr({fill: Highcharts.getOptions().colors[0], padding: 10, r: 5, zIndex: 8}).css({color: '#FFFFFF'}).add();

          setTimeout(function() {
            label.fadeOut();
          }, 10000);//Time legth of popupwindow
        }
      }
    },
    title: {
      text: String(strTitle)
    },
    tooltip: {
      valueDecimals: 3,
      valueSuffix: '°C'
    },
    yAxis: {
      title: {
        text: 'Temperature'
      }
    },
    xAxis: {
      type: 'category'
    },
    series: [
      {
        animation: false,
        turboThreshold: 0, //This makes it possible for large arrays!
        data: sData,
        lineWidth: 0.6,
        name: 'Temperature'
      }
    ]
  };

  const options = {
    global: {
      useUTC: false
    },
    lang: {
      decimalPoint: ',',
      thousandsSep: '.'
    }
  };

  var graph = <ChartView style={{
      height: 300
    }} config={conf} options={options} originWhitelist={['']}></ChartView>

  return graph;
}
