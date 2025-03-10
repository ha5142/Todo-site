import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //properties
    todos: [
        {
            id: 1,
            todo: "Todo msg", // like learn dsa, nodejs, react, backend
            completed: false,

        }
    ], 
    
    //methods to handling the functionality of todos
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {}, 
    toggleComplete: (id) => {}
  
})

//custom hook
export const useTodo = () => { 
    return useContext(TodoContext) 
}

export const TodoProvider = TodoContext.Provider