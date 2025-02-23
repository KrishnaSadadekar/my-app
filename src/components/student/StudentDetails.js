import { useContext } from "react";
import { StudentContext } from "../../services/StudentContext";
import { useNavigate } from "react-router-dom";

const StudentDetails = ({ isPopupVisible, setIsPopupVisible }) => {
  const { students, deleteStudent } = useContext(StudentContext);
  const navigate =useNavigate();
  // Hide popups
  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  const deleteStudentData = (id) => {
    deleteStudent(id);
  };

  const updateStudentData=(id)=>
    {
      navigate(`/update/${id}`)

    }
  return (
    <div>
      {isPopupVisible && (
        <>
          <div className="overlay show" onClick={hidePopup}></div>
          <div
            className="popup show"
            id="details-section"
            style={{ width: "80%", maxWidth: "900px" }}
          >
            <h2 className="text-center">Student Details</h2>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((s) => (
                      <tr key={s.id}>
                        <td>{s.id || "NA"}</td>
                        <td>{s.name || "NA"}</td>
                        <td>{s.age ? `${s.age} years` : "NA"}</td>
                        <td>{s.course || "NA"}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => updateStudentData(s.id)}
                          >
                            Edit
                          </button>{" "}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteStudentData(s.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No students available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-danger btn-sm" onClick={hidePopup}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDetails;
