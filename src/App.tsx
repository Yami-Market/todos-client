import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Todo from './components/Todos/Todo';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='todos' element={<Todos />} />
        <Route path='todos/:todoId' element={<Todo />} />
        <Route path='*' element={<Navigate to='/home' replace={true} />} />
      </Routes>
    </>
  );
};

export default App;
