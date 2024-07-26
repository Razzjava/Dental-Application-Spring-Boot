

function RegisterDentalPractice(){

    return (
        <>
            <div className="mb-3">
                <label htmlFor="PracticeName" className="form-label">Practice Name</label>
                <input type="text" className="form-control" id="practiceName"
                       placeholder="xpz Practice"/>

                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label hmtlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )

}

export default RegisterDentalPractice;