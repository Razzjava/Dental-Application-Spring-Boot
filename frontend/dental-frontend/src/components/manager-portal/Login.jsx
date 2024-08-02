import { useState } from "react";
import {Link} from "react-router-dom";

function Login(){
const [username, setUsername] = useState("")
const [password, setPassword]   = useState("")


    const handleUsername = (e)=>{
    setUsername(e.target.value)
    }

    const handlePassword = (e)=>{
    setPassword(e.target.value)
    }

    const handleSubmit = (e)=>{
    e.preventDefault();
    const login = {"username": username, "password": password}

    }




    return(
        <>
            <Link className={" position-absolute top-0 start-0"} to={"/"} >Return Home</Link>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"  required aria-required={true}/>
                        <label htmlFor="floatingInput" onChange={handleUsername} >Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword"  required/>
                        <label htmlFor="floatingPassword" onChange={handlePassword} >Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" >Sign in</button>

                </form>
            </main>
        </>
    )
}


export default Login;