import "./patient-list.css";
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";

function PatientList() {

    const columns = [
        {field: "firstName", headerName: "First Name", width: 150},
        {field: "lastName", headerName: "Last Name", width: 150},
        {field: "email", headerName: "Email", width: 150},
        {field: "address", headerName: "Address", width: 150},
        {field: "city", headerName: "City", width: 150},
        {field: "state", headerName: "State", width: 150},
        {field: "zipCode", headerName: "Zip Code", width: 100},
        {field: "phoneNumber", headerName: "Phone Number", width: 150},
    ]
    const data = [
        {id: 1, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 2, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 3, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 4, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 5, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 6, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 7, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 8, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 9, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 10, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 11, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 12, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 13, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 14, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 15, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 16, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"},
        {id: 17, firstName: "Mohamed", lastName: "Nibras", email: "mn@gmail.com", address: "6/11D", city: "Matale", state: "Central", zipCode: "123", phoneNumber: "456456"}
    ]

    return (
        <div className="patientList">
            <div>
                <div>
                    <Link to="/new-patient">
                        <button className="addPatientButton">Create</button>
                    </Link>
                </div>
                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default PatientList;