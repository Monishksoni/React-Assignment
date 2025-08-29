import './App.css'
import Header from './Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Headerwtailwind from './Headerwtailwind';
import Footer from './Footer'
import Formstyle from './Formstyle'
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Home></Home> */}
        <Headerwtailwind></Headerwtailwind>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/add' element={<Formstyle></Formstyle>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
