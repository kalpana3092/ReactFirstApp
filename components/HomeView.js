import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import {Dimensions} from 'react-native'
import { color } from 'react-native-reanimated';

const data = [
    {id: 'a', value: 'Profile'},
    {id: 'b', value: 'My Account'},
    {id: 'c', value: 'My Orders'},
    {id: 'd', value: 'My Cart'}
  ];
  const numColumns = 2;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
    container: {

    },
    itemContainer: {
      width: size,
      height: size,
      margin: 8,
      backgroundColor: '#df595a',
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      // borderRadius: size/2,
      borderColor: 'black',
      borderWidth: 1
    },
    item: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
    color: 'white'
    }
  });
  
export default class HomeView extends Component {
    
render(){
    return(
      <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns} />
        </SafeAreaView>
    );
}
}