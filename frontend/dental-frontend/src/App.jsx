import { useState } from 'react'
import Home from "./components/Home.jsx";
import './App.css'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

          <h1 className={"fixed-top"}>Dental Application</h1>
          <Home></Home>
          <Link to={"/finddentist"}>Find a Dentist</Link>
          <br></br>
          <Link to={"/registerdentalpractice"}>Register Dental Practice</Link>


      </>
  )
}

export default App
