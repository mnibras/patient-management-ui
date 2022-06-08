import "./new-patient.css";
import {useNavigate} from "react-router";

const Swal = require('sweetalert2');

function NewPatient() {
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const patientData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            address: event.target.address.value,
            city: event.target.city.value,
            state: event.target.state.value,
            zipCode: event.target.zipCode.value,
            phoneNumber: event.target.phoneNumber.value,
        }
        fetch(
            "http://localhost:9090/api/v1/patient",
            {
                method: "POST",
                body: JSON.stringify(patientData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            Swal.fire(
                'New patient added!'
            )
            navigate("/patient-list", {replace: true});
        });
    }

    return (
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
                    <input type="text" id="zipCode" required/>
                </div>
                <div className="addPatientItem">
                    <label>Phone</label>
                    <input type="number" id="phoneNumber" required/>
                </div>
                <button className="addPatientButton">Create</button>
            </form>
        </div>
    );
}

export default NewPatient;