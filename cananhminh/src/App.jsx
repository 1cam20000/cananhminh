import { createContext, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Complete from "./page/Complete";
import Active from "./page/Active";

export const AppContext = createContext(null);
export const AppContext2 = createContext(null);
function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (val) => {
    const newTodo = {
      id: new Date().getTime(),
      name: val,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <AppContext.Provider value={handleAdd}>
      <AppContext2.Provider value={{ todos, setTodos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/active" element={<Active />} />
            <Route path="/complete" element={<Complete />} />
          </Routes>
        </BrowserRouter>
      </AppContext2.Provider>
    </AppContext.Provider>
  );
}

export default App;
