/**
 * Created by jinlongxi on 17/10/23.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';


const getVisibleTodos =(todos,filter)=>{
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t =>t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

const mapStateToprops = (state) =>{
  return {
      todos:getVisibleTodos(state.todos,state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) =>{
  return{
      onTodoClick : (id) =>{
          console.log(8888888888+'/'+id)
          dispatch(toggleTodo(id))
      }
  }
};

const VisibleTodoList =connect(
    mapStateToprops,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList
