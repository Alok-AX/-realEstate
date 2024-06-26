import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import SignOut from "./pages/SignOut"
import Profile from "./pages/Profile"
import Header from "./components/Header"
export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-out' element={<SignOut/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  
  </BrowserRouter>
  )
}
