import React, { useState } from 'react';
import {TodoCard} from '../../components/TodoCard/TodoCard';
import {Form} from '../TodoForm/TodoForm';
import "../TodoList/TodoList.css";

interface Todo {
  task: string;
  description: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (task: string, description: string) => {
    const newTodo: Todo = {
      task,
      description,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='list'>
      <Form onSubmit={handleSubmit} />
      {todos.map((todo, index) => (
        <TodoCard key={index} task={todo.task} description={todo.description} onDelete={() => deleteTodo(index)}/>
      ))}
    </div>
  );
};


