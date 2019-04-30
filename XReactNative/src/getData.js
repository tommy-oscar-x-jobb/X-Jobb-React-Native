export const getMonthleyData = ()=>{
  var customData = require('../JSON-Data/monthleyavarage.json');
  return customData;
}

export const getDaylyAvrageData = ()=> {
  var customData = require('../JSON-Data/daylyavarage.json');
  return customData;
}
export const getAllData = ()=> {
  var customData = require('../JSON-Data/data.json');
  return customData;
}

export const getIOSData = ()=> {
  var customData = require('../JSON-Data/dataIOS.json');
  return customData;
}

export const parseAllData = (data) =>{
  var dataArray = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    dataArray.push([
      item.Datum,
      item.Lufttemperatur
    ]);
  }
  return dataArray;
}


export const parseMonthleyData = (data) =>{
  var dataArray = [];
  var keyArray = Object.keys(data);
  for (var year = 0; year < keyArray.length; year++){
  // for (var year = 0; year < 2; year++){
    for (var index = 0; index < 12; index++){
      dataArray.push([
        (keyArray[year] + "-" + String(index + 1)),
        data[keyArray[year]][index]
      ]);
    }
  }
  return dataArray;
}

export const parseDaylyAvrageData = (data)=> {
  var dataArray = [];
  var yearKeyArray = Object.keys(data);
  for (var year = 0; year < yearKeyArray.length; year++){
    var monthKeyArray =Object.keys(data[yearKeyArray[year]])

    for (var month = 0; month < monthKeyArray.length; month++){
      var daysInMonth = data[yearKeyArray[year]][monthKeyArray[month]].length

      for (var index = 0; index < daysInMonth; index++ ){
        dataArray.push([
          (yearKeyArray[year] + "-" + monthKeyArray[month] + "-" +
            String(index + 1)),
          data[yearKeyArray[year]][monthKeyArray[month]][index]
        ]);
      }

    }
  }
  return dataArray;
}

// export const parseAllData = (customData) =>{
//   var dataArray = [];
//   for (var i = 0; i < customData.length; i++) {
//     var item = customData[i];
//     dataArray.push({
//       x: item.Datum,
//       y: item.Lufttemperatur
//     });
//   }
//   return dataArray;
// }

// export const parseMonthleyData = (data) =>{
//   var dataArray = [];
//   var keyArray = Object.keys(data);
//   // for (var year = 0; year < keyArray.length; year++){
//   for (var year = 0; year < 1; year++){
//     for (var index = 0; index < 12; index++){
//       dataArray.push({
//         x: keyArray[year] + "-" + String(index + 1),
//         y: data[keyArray[year]][index]
//       });
//     }
//   }
//   return dataArray;
// }

// export const parseDaylyAvrageData = (data)=> {
//   var dataArray = [];
//   var yearKeyArray = Object.keys(data);
//   for (var year = 0; year < yearKeyArray.length; year++){
//     var monthKeyArray =Object.keys(data[yearKeyArray[year]])
//
//     for (var month = 0; month < monthKeyArray.length; month++){
//       var daysInMonth = data[yearKeyArray[year]][monthKeyArray[month]].length
//
//       for (var index = 0; index < daysInMonth; index++ ){
//         dataArray.push({
//           x: yearKeyArray[year] + "-" + monthKeyArray[month] + "-" +
//             String(index + 1),
//           y: data[yearKeyArray[year]][monthKeyArray[month]][index]
//         });
//       }
//
//     }
//   }
//   return dataArray;
// }
