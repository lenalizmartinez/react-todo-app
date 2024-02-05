import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer,[], init);

    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);
  
    const handleNewTodo = ( newTodo ) => {
      dispatch({
          type: "Add",
          payload: newTodo,
      })
    }
  
    const handleDeleteTodo = (id) => {
      dispatch({
          type:"Delete",
          payload: id
      })
    }
    const handleToggleTodo = (id)=>{
        dispatch({
            type:"Toggle",
            payload: id,
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}
