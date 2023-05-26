import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import About from './Abuot/About'
import Home from './Home/Home'
import Price from './Price/Price'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Price" element={<Price />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App