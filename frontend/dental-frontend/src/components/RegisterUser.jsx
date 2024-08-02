import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";


// showcase as modal
function RegisterUser({dentist}){

    const [name,setName] = useState("")
    const [address, setAddress] = useState("")
    const [ contactNumber, setContactNumber ] = useState("")

const navigate = useNavigate();



    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value);
    }
    const handleContactNumber = (e)=>{
        setContactNumber(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user = { "name":name, "address": address, "contactNumber": contactNumber, "dentistId":dentist.id }

        fetch("http://localhost:9002/createuser",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user)
        }
        )

       navigate("/confirmation")

    }




    return(
        <>


            <div className="modal" id={"registeruser"} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Register to Practice</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">

                                <div className="card">
                                    <div className="card-body">
                                        <h5>Dental Practice Details</h5>
                                        <h6 className="card-title">{typeof dentist == "undefined" ? "hello" : "Practice Name: " + dentist.companyName}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{typeof dentist == "undefined" ? "hello" : "ID: " + dentist.id}</h6>
                                        <p> {typeof dentist == "undefined" ? "hello" : "City:  " + dentist.city}  </p>
                                        <p> {typeof dentist == "undefined" ? "hello" : "Remaining Spaces: " + dentist.numOfSpaces} </p>
                                        <p> {typeof dentist == "undefined" ? "hello" : "Address:  " + dentist.address} </p>

                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="PracticeName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="practiceName"
                                           placeholder="xpz Practice" onChange={handleName} required/>


                                    <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" id="ContactNumber"
                                           placeholder="07348753847" onChange={handleContactNumber} required/>

                                </div>
                                <div className="mb-3">
                                    <label hmtlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                              onChange={handleAddress} required></textarea>
                                </div>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel
                                </button>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterUser;