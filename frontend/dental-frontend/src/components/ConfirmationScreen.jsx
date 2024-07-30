import {Link} from "react-router-dom";


function ConfirmationScreen(){


    return(
        <>
            <Link className={" position-absolute top-0 start-0"} to={"/"} >Return Home</Link>
            <h5> Thank you for registering, the practice will be in touch!</h5>
        </>
    )
}

export default ConfirmationScreen;