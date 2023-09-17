import React, { useState } from 'react';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import "../TodoForm/TodoForm.css";

interface FormProps {
  onSubmit: (task: string, description: string) => void;
}

export const Form = ({ onSubmit }:FormProps) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(task, description);
    setTask('');
    setDescription('');
  };

  return (
    <div className='todoForm'>
      <Input value={task} onChange={(e) => setTask(e.target.value)} />
      <Input value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

