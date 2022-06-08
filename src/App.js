import './App.css';
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import {Route, Routes} from "react-router-dom";
import PatientList from "./pages/patient-list/patient-list";
import NewPatient from "./pages/new-patient/new-patient";
import Dashboard from "./pages/dashboard/dashboard";
import Patient from "./pages/patient/patient";

function App() {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/patient-list" element={<PatientList/>}/>
                    <Route path="/new-patient" element={<NewPatient/>}/>
                    <Route path="/patient/:patientId" element={<Patient/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
