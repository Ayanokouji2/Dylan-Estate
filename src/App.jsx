import React from 'react'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SellerHome from './pages/SellerHome'
import SellerPropertyListing from './pages/SellerPropertyListing'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listyourprop' element={<SellerHome/>}/>
          <Route path='/propertylisting' element={<SellerPropertyListing/>}/>

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
