
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
} from 'react-native';

var Controller = require('./controller')

class RobotController extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Controller></Controller>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RobotController', () => RobotController);
