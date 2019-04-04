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
import ChartView from 'react-native-highcharts';

import {getMonthleyData, getDaylyAvrageData, parseMonthleyData,
  parseDaylyAvrageData, getAllData, parseAllData, getIOSData} from './src/getData.js'
import {getGraph} from './src/getGraph.js'


export default class App extends React.Component {
  constructor() {
    super();
    this._graphExperiment1 = this._graphExperiment1.bind(this);
    this._graphExperiment2 = this._graphExperiment2.bind(this);
    this._graphExperiment3 = this._graphExperiment3.bind(this);
    this._parsingExperiment1 = this._parsingExperiment1.bind(this);
    this._parsingExperiment2 = this._parsingExperiment2.bind(this);
    this._parsingExperiment3 = this._parsingExperiment3.bind(this);

    this.addLogg = this.addLogg.bind(this);

    this.state = {
      rows: [],
      sampleData: []
    };
  }


  render() {

    return (<View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Parsing Experiments:</Text>
          <Button onPress={this._parsingExperiment1} title="ParsingExperiment 1"/>
          <Button onPress={this._parsingExperiment2} title="ParsingExperiment 2"/>
          <Button onPress={this._parsingExperiment3} title="ParsingExperiment 3"/>

        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Graph Experiments:</Text>
          <Button onPress={this._graphExperiment1} title="GraphExperiment 1"/>
          <Button onPress={this._graphExperiment2} title="GraphExperiment 2"/>
          <Button onPress={this._graphExperiment3} title="GraphExperiment 3"/>

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



  addLogg = (logg) =>{
    var rows = this.state.rows;
    rows.push(<Text key={rows.length}>{logg}</Text>)
    this.setState({rows: rows})
  }

  _parsingExperiment1() {
    var data = getMonthleyData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    this.addLogg(logg);


    var sData = parseMonthleyData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    this.addLogg(logg)
  };

  _parsingExperiment2() {
    var data = getDaylyAvrageData();
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    this.addLogg(logg);

    var sData = parseDaylyAvrageData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    this.addLogg(logg)
  };

  _parsingExperiment3() {
    var data = getIOSData(); //For ios
    // var data = getAllData(); //For android
    const startTime = new Date().getTime();
    var logg = "Start Parsing";
    this.addLogg(logg);

    var sData = parseAllData(data);
    const parsingTimeStamp = new Date().getTime();
    logg = "Parsing finished";
    this.addLogg(logg);

    logg = "Time elapsed: " + (parsingTimeStamp - startTime)
    this.addLogg(logg)
  };

  _graphExperiment1() {
    var data = getMonthleyData();

    var sData = parseMonthleyData(data);

    const renderingTimestamp = new Date().getTime();
    var logg = "Start Rendering graph, timestamp: " + renderingTimestamp;
    this.addLogg(logg);

    var title = 'Average monthly temeratures between 1961-2018:'
    var graph = getGraph(sData, title);
    this.setState({sampleData: graph})
  };

  _graphExperiment2() {
    var data = getDaylyAvrageData();

    var sData = parseDaylyAvrageData(data);

    const renderingTimestamp = new Date().getTime();
    var logg = "Start Rendering graph, timestamp: " + renderingTimestamp;
    this.addLogg(logg);
    var title =  "Average daily temeratures between 1961-2018:"
    var graph = getGraph(sData, title);
    this.setState({sampleData: graph})
  };

  _graphExperiment3() {
    var data = getIOSData(); //For ios
    // var data = getAllData(); //For android


    var sData = parseAllData(data);

    const renderingTimestamp = new Date().getTime();
    var logg = "Start Rendering graph, timestamp: " + renderingTimestamp;
    this.addLogg(logg);

    var title = "Daily temeratures between 1961-2018:";
    var graph = getGraph(sData, title);
    this.setState({sampleData: graph})

  };

}
