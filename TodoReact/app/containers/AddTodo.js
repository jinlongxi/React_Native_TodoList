/**
 * Created by jinlongxi on 17/10/23.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../actions';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
let AddTodo=({dispatch}) =>{
        let input;
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                             onChangeText={text=>{
                                 input=text
                             }}
                              />
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={()=>{
                        console.log(input)
                        dispatch(addTodo(input))
                    }}
                >
                    <Text style={styles.search}>添加</Text>
                </TouchableOpacity>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
        height: 44,
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingLeft: 5
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23beff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44
    }
});


AddTodo = connect()(AddTodo);

export default AddTodo
