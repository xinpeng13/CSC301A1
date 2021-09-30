import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Card} from 'react-native-paper';
import { useState , useEffect} from 'react';

export default function Item() {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    getDatasList();
  }, []);

  function getDatasList() {
    return fetch("http://10.0.2.2:8000/api/checkouts/", {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json, "text");
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const renderData = (item) => {
    return(
      <Card style = {styles.cardStyle}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        
      </Card>
    )
  }

  return (
      <View style = {{flex:1}}>
        <FlatList
        data = {data}
        renderItem = {({item}) => {
        return renderData(item)
        }}
        keyExtractor = {item => `${item.id}`}

        />
      </View>
      
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    padding: 20,
    backgroundColor: '#047167',
  },
  text:{
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
  }
});