import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Todo as TodoType, getTodoById, updateTodo } from '../../api/todos';

const Todo = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (todoId) {
      getTodoById(Number(todoId))
        .then(response => {
          if (response.status === 200) {
            setTodo(response.data);
          } else {
            setError(response.statusText);
          }
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [todoId]);

  const handleBack = () => {
    navigate('/todos');
  };

  const toggleCompleted = async () => {
    if (!todo) {
      return;
    }

    try {
      const response = await updateTodo(todo.id, {
        ...todo,
        completed: !todo.completed
      });

      if (response.status === 200) {
        setTodo(response.data);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>
        Todo {todo.id}: {todo.title}
      </h1>
      <div>{todo.completed ? 'Completed' : 'Not completed'}</div>
      <button onClick={toggleCompleted}>
        {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      &nbsp;
      <button onClick={handleBack}>Back</button>
    </>
  );
};

export default Todo;
