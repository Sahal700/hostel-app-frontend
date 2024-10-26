import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import People from './pages/People'
import Room from './pages/Room'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/room' element={<Room/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
