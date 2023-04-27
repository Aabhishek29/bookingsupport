import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={< Dashboard />}></Route>
          <Route exact path='/about' element={< Dashboard />}></Route>
          <Route exact path='/faq' element={< Dashboard />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/form' element={< Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
