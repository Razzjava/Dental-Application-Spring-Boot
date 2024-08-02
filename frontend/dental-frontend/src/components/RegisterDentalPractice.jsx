import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function RegisterDentalPractice(){
    const [companyName, setCompanyName] = useState("");
    const [emailAddress, setEmailAddress] = useState("")
    const [city, setCity] = useState("")
    const [spaces, setSpaces] =useState(0)
    const [address, setAddress] = useState("")
    const navigate = useNavigate();
    const [password, setPassword] = useState("")

    const handleName = (e)=>{
        setCompanyName(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmailAddress(e.target.value);
    }
    const handleCity = (e)=>{
        setCity(e.target.value);
    }
    const handleSpaces = (e)=>{
        setSpaces(e.target.value);
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const setValuesToNull = ()=>{
        setAddress("")
        setSpaces(0);
        setCity("")
        setCompanyName("")
        setEmailAddress("")
        setPassword()
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const dentist = {"companyName": companyName, "emailAddress": emailAddress, "city": city, "numOfSpaces": spaces, "address": address, "password":password}

        fetch("http://localhost:9002/createdentist", {
        method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(dentist)


        })

        setValuesToNull();
        navigate("/DentalConfirmation");

    }


    return (
        <>
            <Link className={" position-absolute top-0 start-0"} to={"/"} >Return Home</Link>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="PracticeName" className="form-label">Practice Name</label>
                    <input type="text" className="form-control" id="practiceName"
                           placeholder="xpz Practice" onChange={handleName} required/>

                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address (This will be your username)</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" onChange={handleEmail} required/>
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city"
                           placeholder="london" onChange={handleCity}/>
                    <label htmlFor="openSpaces" className="form-label">Open Spaces</label>
                    <input type="number" className="form-control" id="openSpaces"
                           onChange={handleSpaces} required/>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"
                           onChange={handlePassword} required/>
                </div>
                <div class="mb-3">
                    <label hmtlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleAddress} required></textarea>
            </div>
            <button  className="btn btn-primary" type={"submit"}  >Submit</button>
        </form>
            </>
    )

}

export default RegisterDentalPractice;