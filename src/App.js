import { AdminPage } from './AdminPage';
import './App.css';
import HomePage from './HomePage';
import {Route, Link, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Link to = "/">HomePage</Link>
      <Link to = "/admin">AdminPage</Link>
      
    </div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>

    </BrowserRouter>
   
    </>
  );
}

export default App;
// create a button to submit form
// get name in console in when pressed button
// set default value in the hooks
//  