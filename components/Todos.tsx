"use client"
import React from 'react'
import { useTodos } from '@/stores/tasks';

const Todos = () => {
    const {todos} = useTodos();
    console.log(todos)

  return (
    <div>
        <ul>
            <li>ss</li>
        </ul>
    </div>
  )
}

export default Todos;