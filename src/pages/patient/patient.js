import "./patient.css";
import {useLocation, useNavigate} from "react-router";

const Swal = require('sweetalert2');

function Patient() {
    const location = useLocation();
    const navigate = useNavigate();

    function submitPatientHandler(event) {
        event.preventDefault();
        const patientData = {
            id: location.state.data.id,
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
                method: "PUT",
                body: JSON.stringify(patientData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            Swal.fire(
                'Patient Id: '.concat(location.state.data.id).concat(' updated !')
            )
            navigate("/patient-list", {replace: true});
        });
    }

    return (
        <div className="patient">
            <h1 className="addPatientTitle">Edit Patient</h1>
            <div className="patientBottom">
                <form className="patientForm" onSubmit={submitPatientHandler}>
                    <div className="patientFormLeft">
                        <label>First Name</label>
                        <input type="text" id="firstName" required defaultValue={location.state.data.firstName}/>
                        <label>Last Name</label>
                        <input type="text" id="lastName" required defaultValue={location.state.data.lastName}/>
                        <label>Address</label>
                        <input type="text" id="address" required defaultValue={location.state.data.address}/>
                        <label>Email</label>
                        <input type="email" id="email" required defaultValue={location.state.data.email}/>
                        <label>City</label>
                        <input type="text" id="city" required defaultValue={location.state.data.city}/>
                        <label>State</label>
                        <input type="text" id="state" required defaultValue={location.state.data.state}/>
                        <label>Zipcode</label>
                        <input type="text" id="zipCode" required defaultValue={location.state.data.zipCode}/>
                        <label>Phone</label>
                        <input type="text" id="phoneNumber" required defaultValue={location.state.data.phoneNumber}/>

                        <button className="patientButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Patient;