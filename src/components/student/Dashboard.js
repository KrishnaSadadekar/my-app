import React, { useState, useEffect } from "react";
import StudentHeader from "./StudentHeader";
import StudentDetails from "./StudentDetails";


import UpdateStudent from "./UpdateStudent";
import AddStudent from "./AddStudent";

const Dashboard = () => {
  const [isStudentPopupVisible, setIsStudentPopupVisible] = useState(false);
  const [isAddBatchPopupVisible, setAddBatchPopupVisible] = useState(false);
  const [isUpdatePopupVisible, setUpdatePopupVisible] = useState(false);
  const [isAddPopupVisible, setAddStudentPopupVisible] = useState(false);
  const [student, setStudent] = useState([]);

  const email = sessionStorage.getItem("email");
  const getDataFromServer = async () => {
    if (!email) {
      console.error("Email not found in sessionStorage");
      return;
    }
    try {
   ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, [email]);

  return (
    <div>
      <StudentHeader />
      <div>
        {/* Conditional Rendering with Unique Keys */}

        {isStudentPopupVisible && (
          <StudentDetails
            key="student-details"
            isPopupVisible={isStudentPopupVisible}
            setIsPopupVisible={setIsStudentPopupVisible}
            student={student}
          />
        )}

        {isAddPopupVisible && (
          <AddStudent
            key="add-student"
            isPopupVisible={isAddPopupVisible}
            setIsPopupVisible={setAddStudentPopupVisible}
            student={student}
            demo={getDataFromServer}
          />
        )}

        <main
          className={
            isUpdatePopupVisible || isStudentPopupVisible|| isAddPopupVisible ? "blur" : ""
          }
        >
          <section className="intro-section" id="home-section">
            <div
              className="slide-1"
              style={{ backgroundImage: "url('./images/hero_1.jpg')" }}
              data-stellar-background-ratio="0.5"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4">
                        <h1>Student Management</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>

                      <div className="col-lg-5 ml-auto">
                        <div
                          className="card"
                          style={{ minHeight: "300px", minWidth: "550px" }}
                        >
                          <div className="card-body text-center">
                            <img
                              src="./images/person_3.jpg"
                              alt="Profile"
                              className="mb-3"
                              style={{ width: "100px", borderRadius: "50%" }}
                            />
                            <h5 className="card-title">Welcome, {email}!</h5>
                            <p className="card-text" style={{ color: "black" }}>
                              Some quick example text to build on the card
                              title.
                            </p>

                            <div className="d-flex justify-content-center mt-3">
                              
                              <button
                                className="btn btn-primary mx-2"
                                onClick={() => setIsStudentPopupVisible(true)}
                              >
                                Details
                              </button>
                              <button className="btn btn-primary mx-2" onClick={()=>setAddStudentPopupVisible(true)}>
                                Add Student
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
