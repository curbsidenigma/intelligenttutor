import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NoContent from './pages/NoContent'

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route
            path='/intelligenttutor/'
            element={<Home/>}
          />
          <Route
            path='/intelligenttutor/404/'
            element={<NoContent/>}
          />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
