
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";



function App()

{
  const [ruser, setruser] = useState([
    {
        username: "Aswanthitha",
        password: "1234"
    }
])
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login user={ruser} setuser ={setruser}/>}> </Route>
<Route path="/signup" element={<Signup user={ruser} setuser={setruser}/>}></Route>
<Route path="/landing" element={<Landing/>}></Route>


</Routes>
</BrowserRouter>
  )
}



export default App
