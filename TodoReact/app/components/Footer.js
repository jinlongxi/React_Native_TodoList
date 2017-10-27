/**
 * Created by jinlongxi on 17/10/23.
 */
import React from 'react'
import {
    View,
    Text
} from 'react-native'
import FilterLink from '../containers/FilterLink'

const Footer =()=>(
    <View style={{borderWidth:1,borderColor:'red'}}>
        <Text>Show:</Text>
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </View>
)

export default Footer
