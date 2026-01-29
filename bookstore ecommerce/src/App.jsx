import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/homepage'
import BookDetailsPage from './pages/BookDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/books/:id" element={<BookDetailsPage/>}/>
        <Route path="/cart" element={<h1 style={{color: 'white'}}>Cart Page - Coming Soon!</h1>}/>
  
      </Routes>
    </>
  )
}

export default App
