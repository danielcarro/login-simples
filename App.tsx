import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const  App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  text:{
    color:"#fff"
  }
});

export default  App;
