/* eslint-disable react-hooks/exhaustive-deps */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import store from '../store/store'
import { Provider } from 'react-redux'
import Home from './Pages/blog/Home'
import AddBlog from './Pages/blog/AddBlog'
import SingleBlog from './Pages/blog/SingleBlog'
import EditBlog from './Pages/blog/EditBlog'

function App() {
  
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter >
    <Routes>
      <Route path = '/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path = '/blog/add' element={<AddBlog/>}/>
      <Route path = '/blog/:id' element={<SingleBlog/>}/>
      <Route path = '/blog/edit/:id' element={<EditBlog/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
