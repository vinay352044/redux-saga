import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Display from './Components/Display'
import Header from './Components/Header'
import './App.css';
import Detailed from './Components/Detailed'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <br/>
    <br/>
    <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path='/detailed/:id' element={<Detailed/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
