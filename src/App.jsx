
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Portfolio from "./Pages/Portfolio"
import ProtectedRoute from './services/ProtectedRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute/>}>
            <Route path='/' element={<Portfolio/>} />
          </Route>
          
          <Route path='/login' element={<Login/>}  />
          <Route path='/register' element={<Register/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
