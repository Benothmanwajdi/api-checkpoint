import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import UsersList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/userslist">
          <button>Users List </button>
        </Link>
        <Link to="/">
          <button>Home </button>
        </Link>

        <Routes>
          <Route path="/userslist" element={<UsersList/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;