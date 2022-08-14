import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route
            path='/intelligenttutor'
            element={<Home/>}
          />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
