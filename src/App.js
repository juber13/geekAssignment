// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/header'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
