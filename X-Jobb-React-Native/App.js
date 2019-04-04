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
import styles from './styles.js';
import {WebBrowser, ScreenOrientation} from 'expo';
import ChartView from 'react-native-highcharts';

import {getMonthleyData, getDaylyAvrageData, parseMonthleyData,
  parseDaylyAvrageData, getAllData, parseAllData} from './src/getData.js'
import {getGraph} from './src/getGraph.js'


export default class App extends React.Component {
  constructor() {
    super();
    this._handleExperiment1 = this._handleExperiment1.bind(this);
    this._handleExperiment2 = this._handleExperiment2.bind(this);
    this._handleExperiment3 = this._handleExperiment3.bind(this);
    this.addLogg = this.addLogg.bind(this);
    this._changeRotation = this._changeRotation.bind(this);

    this.state = {
      rows: [],
      sampleData: [],
      portrait: true
    };
  }


  render() {

    return (<View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Experiments:</Text>
          <Button onPress={this._handleExperiment1} title="Experiment1"/>
          <Button onPress={this._handleExperiment2} title="Experiment2"/>
          <Button onPress={this._handleExperiment3} title="Experiment3"/>
          <Button onPress={this._changeRotation} title="Change Screen Rotation"/>

        </View>
        <View style={styles.logsContainer}>
          <View>
            {this.state.sampleData}
          </View>
          <Text style={styles.logsText}>LOGS:</Text>
          <View id="logs">
            {this.state.rows}
          </View>
        </View>
      </ScrollView>
    </View>);
  }


  _changeRotation = () => {
    if (this.state.portrait) {
      ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
      this.setState({portrait: false})
    } else {
      ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
      this.setState({portrait: true})

    }
  }

  addLogg = (logg) =>{
    var rows = this.state.rows;
    rows.push(<Text key={rows.length}>{logg}</Text>)
    this.setState({rows: rows})
  }

  _handleExperiment1() {
    var data = getAllData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    console.log(logg);
    this.addLogg(logg);

    var sData = parseAllData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    console.log(logg);
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    console.log(logg);
    this.addLogg(logg)

    logg = "Start Rendering graph, timestamp: " + parsingTimeStamp;
    console.log(logg);
    this.addLogg(logg);

    var title = "Daily temeratures between 1961-2018:";
    var graph = getGraph(sData, title);
    this.setState({sampleData: graph})

  };

  _handleExperiment2() {
    var data = getDaylyAvrageData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    console.log(logg);
    this.addLogg(logg);

    var sData = parseDaylyAvrageData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    console.log(logg);
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    console.log(logg);
    this.addLogg(logg)

    logg = "Start Rendering graph, timestamp: " + parsingTimeStamp;
    console.log(logg);
    this.addLogg(logg);
    var title =  "Average daily temeratures between 1961-2018:"
    var graph = getGraph(sData, title);
    this.setState({sampleData: graph})
  };

  _handleExperiment3() {
    var data = getMonthleyData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    console.log(logg);
    this.addLogg(logg);


    var sData = parseMonthleyData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    console.log(logg);
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    console.log(logg);
    this.addLogg(logg)

    logg = "Start Rendering graph, timestamp: " + parsingTimeStamp;
    console.log(logg);
    this.addLogg(logg);

    var title = 'Average monthly temeratures between 1961-2018:'
    var graph = getGraph(sData, title, parsingTimeStamp);
    this.setState({sampleData: graph})



  };

  getJson(){
    var customData = require('./JSON-Data/monthleyavarage.json');
    var sData = []
    for (var year = 1961; year < 2017; year++){
      for (var month = 0; month < 12; month++){
        sData.push({
          x: String(year) + "-" + String(month + 1),
          y: customData[String(year)][month]
        })
      }

    }
    return sData;

  }

}
