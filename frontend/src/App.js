import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClass from "./components/AddClass";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddClass />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
