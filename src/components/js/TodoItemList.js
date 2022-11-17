import React from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends React.Component{
    render(){
        const {todos,onToggle,onRemove} = this.props;

        return(
            <div>
                <TodoItem content = "TodoItem1"/>
                <TodoItem content = "TodoItem2"/>
                <TodoItem content = "TodoItem3"/>

            </div>
        );
    }
}

export default TodoItemList;