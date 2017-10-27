import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
const Link = ({active, children, onClick})=> {
    if (active) {
        return <Text style={{color:'green'}}>{children}</Text>
    }
    return (
        <TouchableOpacity
            onPress={()=> {
                onClick()
            }}
        >
            <Text>{children}</Text>
        </TouchableOpacity>
    )
};
export default Link
