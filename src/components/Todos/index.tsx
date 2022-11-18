import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Todo, getAllTodos } from '../../api/todos';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllTodos()
      .then(response => {
        if (response.status === 200) {
          setTodos(response.data);
        } else {
          setError(response.statusText);
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!todos) {
    return <div>Loading...</div>;
  }

  if (todos.length === 0) {
    return <div>No todos</div>;
  }

  return (
    <>
      <h1>Todos Page</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <div>
              {todo.id} - {todo.title}
              &nbsp;
              <Link to={`${todo.id}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
