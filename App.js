// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Inpl from './Inpl';
import Newpl from './Newpl';
import Outpl from './Outpl';
import Signup from './Signup';



import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      {/* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */ }
    
      <BrowserRouter>
      <Routes>
   
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Inpl' element={<Inpl/>}></Route>
       <Route path='/Newpl' element={<Newpl/>}></Route>
       <Route path='/Outpl' element={<Outpl/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
