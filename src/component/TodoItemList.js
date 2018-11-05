import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    render(){
        let {todos, onToggle, onRemove} = this.props;

        let todoList = todos.map(
            ({id,text,checked}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;