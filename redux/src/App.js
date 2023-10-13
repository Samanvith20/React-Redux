import React from 'react'
import Header from './Container/Header'
import {BrowserRouter,Route,Routes} from  "react-router-dom"
import ProductListing from './Container/ProductListing'
import ProductDetails from './Container/ProductDetails'

const App = () => {
  return (

    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route>404 Not Found!</Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
