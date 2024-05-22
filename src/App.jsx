/* eslint-disable react-hooks/exhaustive-deps */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import store from '../store/store'
import { Provider } from 'react-redux'

function App() {
  
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter >
    <Routes>
      <Route path = '/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App