/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
const Login = lazy(() => import('./Pages/auth/Login'));
import Register from './Pages/auth/Register';
import store from '../store/store';
import { Provider } from 'react-redux';
import Home from './Pages/blog/Home';
const AddBlog = lazy(() => import('./Pages/blog/AddBlog'));
const SingleBlog = lazy(() => import('./Pages/blog/SingleBlog'));
const EditBlog = lazy(() => import('./Pages/blog/EditBlog'));

import Protected from './hof/Protected';
import Spinner from './components/Spinner';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route
            path='/login'
            element={
              <Suspense fallback={<div className='text-white '><Spinner/></div>}>
                  <Login />
              </Suspense>
            }
          />          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route
            path='/blog/add'
            element={
              <Suspense fallback={<div className='text-white '><Spinner/></div>}>
                <Protected>
                  <AddBlog />
                </Protected>
              </Suspense>
            }
          />
          <Route
            path='/blog/:id'
            element={
              <Suspense fallback={<div><Spinner/></div>}>
                <Protected>
                  <SingleBlog />
                </Protected>
              </Suspense>
            }
          />
          <Route
            path='/blog/edit/:id'
            element={
              <Suspense fallback={<div><Spinner/></div>}>
                <Protected>
                  <EditBlog />
                </Protected>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
