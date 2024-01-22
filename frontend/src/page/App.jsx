import '../style/App.css';
import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import { authContext } from '../context/authContext';

import Login from "./Login"
import Register from './Register';
import Main from "./Main"
import Page404 from "./Page404"


function App() {
  const {auth} = useContext(authContext)

  return (
   <main className="app">
    <Routes>
      <Route path="/"         element={auth? <Navigate to="/main" /> : <Login />} />
      <Route path="/register" element={auth? <Navigate to="/main" /> : <Register />} />
      <Route path="/main"     element={auth? <Main />                : <Navigate to="/"/>} />
      <Route path="*"         element={<Page404 />} />
    </Routes>
   </main>
  );
}

export default App;
