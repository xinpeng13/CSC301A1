import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function Create() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    return (
        <View>
            <TextInput style = {styles.inputStyle}
                label = "Product Name"
                value = {name}
                mode = "outlined"
                onChangeText = {text => setName(text)}
            >  </TextInput>
            <TextInput style = {styles.inputStyle}
                label = "Description"
                value = {description}            
                mode = "outlined"
                onChangeText = {text => setDescription(text)}
            >  </TextInput>
            <TextInput style = {styles.inputStyle}
                label = "Price"
                value = {price}
                mode = "outlined"
                keyboardType = 'number-pad'
                onChangeText = {text => setPrice(text)}
            >  </TextInput>
            <Button style = {{margin: 15}}
            mode = "contained"
            onPress = {()=> console.log("Button pressed")}
            >Add Product</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 5,
        margin: 10,
    }

})



export default Create
