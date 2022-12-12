import './App.css';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './components/Counter'
import {Login} from './components/Login'
import {Todo} from './components/Todo'
import {Home} from './components/Home'
import { MyNavbar } from './components/MyNavbar';
import {Products} from './components/Products'
import {Product} from './components/Product'
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient=new QueryClient()

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false)
  console.log(isLoggedIn)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <MyNavbar />
        <div className="holder">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='counter' element={<Counter />}/>
        <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='todo' element={<Todo setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='products' element={<Products />}/>
        <Route path='products/:id' element={<Product />}/>
      </Routes>
      </div>
      
      </div>
    </QueryClientProvider>
  );
}

export default App;
