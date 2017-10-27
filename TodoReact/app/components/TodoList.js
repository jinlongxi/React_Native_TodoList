// /**
//  * Created by jinlongxi on 17/10/23.
//  */
import Todo from './Todo';
import React, {Component} from 'react'
import {
    View,
    Text,

} from 'react-native'

const TodoList = ({todos, onTodoClick}) => {
    console.log(JSON.stringify(todos))
    return (
        <View>
            {
                todos.map(todo=> {
                    return (
                        <Todo
                            key={todo.id}
                            onPress={()=>onTodoClick(todo.id)}
                            {...todo}
                        />
                    )
                })
            }
        </View>
    )
};

export default TodoList

