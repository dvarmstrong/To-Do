
import React from "react";
import TodoItem from "./TodoItem";



const ToDoList = ({todos,setTodos,  filteredTodos}) => {
   
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem 
                setTodos={setTodos} 
                todo={todo}
                todos={todos}
                key={todo.id} 
                text={todo.text} 
                id={todo.id}
                />
            ))}

        </ul>
      </div>
    );
        
};




export default ToDoList ;