/**
 * Created by jinlongxi on 17/10/23.
 */
import React from 'react'
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'
const Todo =({onPress,completed,text})=>(
        <TouchableOpacity onPress={onPress} style={{marginLeft:30}}>
            <Text style={{color:completed?'red':'blue'}}>{text}</Text>
        </TouchableOpacity>
);

export default Todo
