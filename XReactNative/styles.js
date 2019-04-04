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
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  logsContainer: {
    paddingLeft: 15
  },
  logsText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24
  }
});
