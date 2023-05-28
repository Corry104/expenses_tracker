import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,View} from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>
            I am in App.js
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
