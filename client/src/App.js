import './App.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <h1>Welcome to UI project</h1>
      <Register />
      <Login />
      <Navbar/>
    </div>

  );
}

export default App;
