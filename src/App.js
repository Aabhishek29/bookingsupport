import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/dashboard' element={< Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
