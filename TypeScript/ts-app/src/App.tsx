import { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
