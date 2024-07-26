


// showcase as modal
function RegisterUser(){

    return(
        <>
            <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Register to Practice</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="PracticeName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="practiceName"
                                       placeholder="xpz Practice"/>

                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                                <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
                                <input type="text" className="form-control" id="ContactNumber"
                                       placeholder="07348753847" />
                            </div>
                            <div className="mb-3">
                                <label hmtlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterUser;