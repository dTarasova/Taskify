import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import './styles.css'
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () =>  { // functional component 
  const [todo, setTodo] = useState<string>("");  //initial value write 
  // const prevents reassignment of vars (var - very bad, an declare multiple times), scoping problems
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}]);
      setTodo("");
    }
  };
  
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };

  return ( 
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div> 
    </DragDropContext>
    
  );
}

export default App;
