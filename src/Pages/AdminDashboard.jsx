import { useEffect, useState } from "react";
import { getAdmissionsAPI } from "../Service/allAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminDashboard = () => {
    const [admissions, setAdmissions] = useState([]);

    const navigate = useNavigate()

    const fetchAdmissions = async () => {
        try {
            const result = await getAdmissionsAPI();
            if (result.status === 200) {
                setAdmissions(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchAdmissions();
    }, []);

    const Logout = () =>{
        toast.success("Logged Out Successfully")
        setTimeout(() => {
            navigate('/')
        }, 1500);
    }

    return (
        <div
            className="p-md-5 p-3"
            style={{ backgroundColor: "rgb(65, 144, 115)", minHeight: "100vh" }}>
                <h6 className="text-end"><button onClick={Logout} className="btn bg-light rounded-5 fw-bold px-4 contents2">Logout</button></h6>
            <h1
                className="fw-bold text-center pt-md-3 text-light headings"
                style={{ letterSpacing: "1px" }}
            >
                Admission Enquiries
            </h1>
            <p className="text-center text-light opacity-75 m-0 pb-md-4 pb-3 contents">
                Manage and monitor all received admission requests
            </p>

            <div className="d-flex justify-content-center">
                <div
                    className="shadow bg-light p-md-5 p-3 rounded-5"
                    style={{ width: "90%" }}
                >
                    <div style={{overflowX:'auto'}}>
                        {/* Table */}
                    <table className="table table-bordered table-hover">
                        <thead
                            className="text-light"
                            style={{ backgroundColor: "rgb(65, 144, 115)" }}
                        >
                            <tr className="contents">
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Program</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>

                        <tbody className="contents">
                            {admissions.length > 0 ? (
                                admissions.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.email}</td>
                                        <td>{item.program}</td>
                                        <td>{item.message || "--"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-4 text-secondary"
                                    >
                                        No admission enquiries found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
