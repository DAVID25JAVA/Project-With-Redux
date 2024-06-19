import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './Store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Cart from './components/Cart/Cart.jsx'
import AddToCart from './components/AddToCart/AddToCart.jsx'
import { Provider } from 'react-redux'
 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Cart />} />
      <Route path='/AddToCart' element={<AddToCart/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider   router={router}/>
     </Provider>
  </React.StrictMode>,
)
