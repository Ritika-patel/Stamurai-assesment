'use client'

import {createContext, ReactNode, useContext, useState} from "react";

export type Todo = {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
}

//thapa technical

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (title: string) => void; //call signature
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export function TodosProvider({children}: { children: ReactNode }) {

    // The state variable todos is expected to be an array of Todo objects.
    const [todos, setTodos] = useState<Todo[]>(() => {
        try{
        const newTodos = localStorage.getItem('todos') || "[]";
        return JSON.parse(newTodos) as Todo[]
        }catch (e) {
            return []
        }

    }) //an array of Todo objects
    interface x {
        id: string;
        title: string;
        description: string;
        status: string;
        createdAt: Date;
      }
      
    function handleAddTodo(credential:x) {
        // it ensures that the newTodos variable is declared and initialized before returning it.
        setTodos((prev) => {
            // we will create a new array
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    title:credential.title,
                    description:credential.description,
                    status:credential.status,
                    // completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            console.log(newTodos)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }

    function handleDeleteTodo(id: string) {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        });
    }

    function handleEditTodo(id: string, updatedTodo: Todo) {
        setTodos((prev) => {
          const newTodos = prev.map((todo) => {
            if (todo.id === id) {
              // If the todo's ID matches the ID of the todo being edited, update the properties
              return {
                ...todo,
                status: updatedTodo.status,
                createdAt: updatedTodo.createdAt,
              };
            } else {
              // If the todo's ID doesn't match, return the todo as-is
              return todo;
            }
          });
      
          localStorage.setItem("todos", JSON.stringify(newTodos));
          return newTodos;
        });
      }
      

    return (
        // @ts-ignore
        <todosContext.Provider value={{todos, handleAddTodo, handleDeleteTodo, handleEditTodo}}>
            {children}
        </todosContext.Provider>
    );
}

export function useTodos() {
    const todosContextValue = useContext(todosContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside of Provider");
    }

    return todosContextValue;
}