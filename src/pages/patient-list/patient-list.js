import "./patient-list.css";
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@mui/icons-material";
import {useEffect, useState} from "react";

const Swal = require('sweetalert2');

function PatientList() {

    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:9090/api/v1/patient")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setPatients(data);
            });
    }, []);

    function deleteHandler(id, name) {
        Swal.fire({
            title: 'Are you sure want to delete '.concat(name).concat(' ?'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://localhost:9090/api/v1/patient/".concat(id), {method: "DELETE"})
                    .then(() => {
                        setPatients(patients.filter((item) => item.id !== id));
                        Swal.fire(
                            'Deleted!',
                            'Patient Name: '.concat(name).concat(' has been deleted.'),
                            'success'
                        )
                    });
            }
        })
    }

    const columns = [
        {field: "id", headerName: "ID", width: 80},
        {field: "firstName", headerName: "First Name", width: 150},
        {field: "lastName", headerName: "Last Name", width: 150},
        {field: "email", headerName: "Email", width: 150},
        {field: "address", headerName: "Address", width: 150},
        {field: "city", headerName: "City", width: 100},
        {field: "state", headerName: "State", width: 100},
        {field: "zipCode", headerName: "Zip Code", width: 100},
        {field: "phoneNumber", headerName: "Phone Number", width: 150},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                const selectedPatient = {
                    id: params.row.id,
                    firstName: params.row.firstName,
                    lastName: params.row.lastName,
                    email: params.row.email,
                    address: params.row.address,
                    city: params.row.city,
                    state: params.row.state,
                    zipCode: params.row.zipCode,
                    phoneNumber: params.row.phoneNumber
                }
                return (
                    <>
                        <Link to={"/patient/" + params.row.id} state={{data: selectedPatient}}>
                            <button className="patientListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="patientListDelete"
                                       onClick={() => deleteHandler(params.row.id, params.row.firstName)}
                        />
                    </>
                );
            },
        },
    ]

    if (isLoading) {
        return (
            <div className="patientList">
                <section>
                    <p>Loading Patients...</p>
                </section>
            </div>
        );
    }

    return (
        <div className="patientList">
            <div>
                <div>
                    <Link to="/new-patient">
                        <button className="addPatientButton">Create</button>
                    </Link>
                </div>
                <div style={{height: 635, width: '100%'}}>
                    <DataGrid
                        rows={patients}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>
        </div>
    );
}

export default PatientList;