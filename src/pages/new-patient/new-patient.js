import "./new-patient.css";

function NewPatient() {

    function submitHandler() {

    }

    return(
        <div className="newPatient">
            <h1 className="addPatientTitle">New Patient</h1>
            <form className="addPatientForm" onSubmit={submitHandler}>
                <div className="addPatientItem">
                    <label>First Name</label>
                    <input type="text" id="firstName" required style={{width: "400px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>Last Name</label>
                    <input type="text" id="lastName" required style={{width: "400px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>Address</label>
                    <textarea id='address' required rows='3' style={{width: "420px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>Email</label>
                    <input type="email" id="email" required style={{width: "400px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>City</label>
                    <input type="text" id="city" required style={{width: "400px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>State</label>
                    <input type="text" id="state" required style={{width: "400px"}}/>
                </div>
                <div className="addPatientItem">
                    <label>Zip Code</label>
                    <input type="text" id="zipcode" required/>
                </div>
                <div className="addPatientItem">
                    <label>Phone</label>
                    <input type="number" id="phone" required/>
                </div>
                <button className="addPatientButton">Create</button>
            </form>
        </div>
    );
}

export default NewPatient;