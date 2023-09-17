import "../TodoCard/TodoCard.css"

interface TodoCardProps {
  task: string;
  description: string;
  onDelete: () => void;
}

export const TodoCard= ({ task, description, onDelete }:TodoCardProps) => (
  <div className="card">
    <h3>Title: {task}</h3>
    <div>Description: {description}</div>
    <button onClick={onDelete}>Delete</button>
  </div>
);

