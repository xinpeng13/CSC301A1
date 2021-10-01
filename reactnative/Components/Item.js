import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Card} from 'react-native-paper';
import { useState , useEffect} from 'react';

export default function Item() {

  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

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
        <Text>{item.price}</Text>
        <Button onPress = {() => setCount(count+item.price)}>Add to cart</Button>
        <Button onPress = {() => setCount(count-item.price)}>Remove from cart</Button>
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
        <Text style = {styles.text}>Price:{count}</Text>
        <Text style = {styles.text}>Tax: {count*0.13}</Text>
        <Text style = {styles.text}>------------------------------------------------------</Text>
        <Text style = {styles.text}>Total: {count* 1.13}</Text>
        <Text style = {styles.text}></Text>
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
      color: '#047167',
      fontSize: 15,
      marginLeft:20,
  }
});