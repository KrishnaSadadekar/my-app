import React, { useState, useEffect, useContext } from "react";
import { StudentContext } from "../../services/StudentContext";

const AddStudent = ({ isPopupVisible, setIsPopupVisible, demo }) => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const hidePopup = () => setIsPopupVisible(false);

  const handleSubmit = () => {
    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }
    addStudent(name, age, course);
    setName("");
    setAge("");
    setCourse("");
    hidePopup();
  };

  useEffect(() => {
    demo();
  }, [demo]);

  return (
    <>
      {isPopupVisible && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Student</h5>
                <div className="crossbtn" onClick={hidePopup}>
                  <i className="fa-solid fa-xmark cross-x"></i>
                </div>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={hidePopup}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddStudent;
