import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer ,createSwitchNavigator} from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Transaction from './screens/transaction';
import Search from './screens/search';
import Login from './screens/login'
import Sign from './screens/signup'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: Transaction},
  Search: {screen: Search},
  
  },
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: (focused, color, size )=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Transaction"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}
        />
        
        )
        
      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={{width:40, height:40}}
        />)
        
      }

    }
  })
}
);

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Sign:{screen:Sign},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
