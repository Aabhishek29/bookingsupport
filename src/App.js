import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from "./pages/contact";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import Footer from "./components/footer";
import Faq from "./pages/faq";
import About from "./pages/about";
import Form from "./pages/form";


function App() {
  return (
    <Router>
        {/*<div style={{*/}
        {/*    position: 'fixed',*/}
        {/*    width: '100%'*/}
        {/*}}>*/}
            <NavigationBar />
        {/*</div>*/}
        {/*<div style={{*/}
        {/*    paddingTop: 50*/}
        {/*}}>*/}
        <Routes>
          <Route exact path='/' element={< Dashboard />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/faq' element={< Faq />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/form' element={< Form />}></Route>
        </Routes>
        {/*</div>*/}
        <Footer />
    </Router>
  );
}

export default App;
