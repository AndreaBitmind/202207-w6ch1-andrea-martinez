import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./features/components/todoList/TodoListComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ToDo List</p>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
