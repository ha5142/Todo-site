import {  useEffect, useState } from 'react'
import { TodoProvider } from './Contexts/Todo'

import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])  // revise working of addTodo

  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((val) => (val.id == id ? todo : val)))  // val is indvidual todo object


  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((each) => (each.id !== id))) // it is working on my condition and its given true statement and its returning new array....

  }

  const toggleComplete = (id) => { 
    setTodos((prev) => prev.map((each) => (each.id == id ? {...each, completed: !each.completed } : each)))

  }

  // local storage

 useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    setTodos(todos)
  }

 }, [])

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))

 }, [todos])


  

  return (
    <TodoProvider value = {{todos, addTodo,  updateTodo, deleteTodo, toggleComplete}}>
      

      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                        
             
                    </div>
    

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo) => (

                          <div key={todo.id}
                          className='w-full'

                          > 
                          <TodoItem todo={todo}/>
                          
                          </div>
                        ))}
                        
                      

                      
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
