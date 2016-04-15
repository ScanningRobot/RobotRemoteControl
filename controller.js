/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');

var Controller = React.createClass({
  getInitialState: function() {
    return {
      url: 'http://localhost/moveRobot/'
    };
  },

  render: function() {
    return (
      <View style={styles.container}>

      <TextInput
        onChangeText={(url) => this.setState({url})}
        placeholder="Enter Robot Ip"/>

      <View style={styles.row}>
        <TouchableHighlight onPress={this.goForward}>
          <Icon name="arrow-up" size={100} color="#900" />
        </TouchableHighlight>
      </View>

      <View style={styles.row}>
        <TouchableHighlight onPress={this.goLeft}>
          <Icon name="arrow-left" size={100} color="#900" />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.stop}>
          <Icon name="stop" style={{marginLeft: 20, marginRight: 20}} size={80} color="#900" />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.goRight}>
          <Icon name="arrow-right" size={100} color="#900" />
        </TouchableHighlight>
      </View>

      <TouchableHighlight onPress={this.goBack}>
        <Icon name="arrow-down" size={100} color="#900" />
      </TouchableHighlight>

      </View>
    );
  },
  goForward: function() {
    fetch('http://' + this.state.url + '/moveRobot/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction: 'forward',
      })
    });
  },
  goBack: function() {
    fetch('http://' + this.state.url + '/moveRobot/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction: 'back',
      })
    });
  },
  goLeft: function() {
    fetch('http://' + this.state.url + '/moveRobot/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction: 'left',
      })
    });
  },
  goRight: function() {
    fetch('http://' + this.state.url + '/moveRobot/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction: 'right',
      })
    });
  },
  stop: function() {
    fetch('http://' + this.state.url + '/moveRobot/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        direction: 'stop',
      })
    });
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  }
});

module.exports = Controller;