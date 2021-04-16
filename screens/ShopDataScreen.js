import React from 'react';
import MyHeader from '../components/Header';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class ShopDataScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      userID: firebase.auth().currentUser.email,
      allLists: []
    }
  }

  componentDidMount() {
    this.getAllLists();
  }

  keyExtractor = (item, index) => {
    index.toString();
  }

  render() {
    return(
      <View style={styles.container}>
          <Text>Shopping Data</Text>
      </View>
    )
  }

  getAllLists = async() => {
    await db.collection('shoppingLists').where("userID", "==", this.state.userID)
    .onSnapshot((snapshot) => {
      let shopLists = snapshot.docs.map((doc) => {
        doc.data();
      });
      console.log(shopLists)
      this.setState({
        allLists: shopLists
      });
    });
    console.log(this.state.allLists)
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#31DF86',
      alignItems: 'center',
      justifyContent: 'center',
    }
})