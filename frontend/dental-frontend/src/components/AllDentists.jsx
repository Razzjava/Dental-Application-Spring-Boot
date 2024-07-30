import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import registerUser from "./RegisterUser.jsx";
import RegisterUser from "./RegisterUser.jsx";
import Button from "bootstrap/js/src/button.js";

function AllDentists(){
const [dentists, setDentists] = useState([])
    const [selectedDentist, setselectedDentist] = useState()

    useEffect(()=>{
        fetch("http://localhost:9002/alldentist").then(res => res.json()).then(data =>{
            let response = Object.values(data);
            let allDentists = [];
            response.forEach(e=>{
                allDentists.push(e);
            })

            setDentists(allDentists);

        })
    },[])



    const handleRegisterClick = (dentist) =>{
    const existingDentist = dentist
    setselectedDentist(dentist);
    }

    return(
        <>
            <Link className={" position-absolute top-0 start-0"} to={"/"} >Return Home</Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Practice Name</th>
                    <th scope="col">Spaces Available</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Register</th>

                </tr>
                </thead>
                <tbody>

                {dentists.map( dentist =>(
                    <tr key={dentist.id}>
                        <th key={dentist.id} scope={"row"}>{dentist.id}</th>
                        <td>{dentist.companyName}</td>
                        <td>{dentist.numOfSpaces}</td>
                        <td>{dentist.city}</td>
                        <td>{dentist.address}</td>
                        {dentist.numOfSpaces > 0 ? <td>
                            <button data-bs-toggle="modal" data-bs-target="#registeruser" onClick={()=>{
                                handleRegisterClick(dentist)
                            }}>Register</button>
                        </td> : <td>No Spaces Remaining</td>}
                    </tr>
                ))}
                </tbody>
            </table>
            <RegisterUser dentist={selectedDentist} ></RegisterUser>
        </>
    )
}


export default AllDentists;