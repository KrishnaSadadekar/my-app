import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import { StudentContext } from "../../services/StudentContext";

const UpdateStudent = () => {
  const { id } = useParams();
  const { students,updateStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  // Find the student by id (Ensure ID is treated as a number)
  const studentData = students.find((x) => x.id === id); // Use find instead of filter
  

  // State for student details
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
  });

  // Update state when studentData is available
  useEffect(() => {
    if (studentData) {
      setStudent({
        id: studentData.id || "",
        name: studentData.name || "",
        age: studentData.age || "",
        course: studentData.course || "",
      });
    }
  }, [studentData]); // Run when studentData changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await updateStudent(student.id, student.name, student.age, student.course);
      alert("Successfully Updated!");
      navigate("/dashboard"); // Navigate after updating
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student!");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <StudentHeader />
      <main>
        <section className="intro-section" id="home-section">
          <div
            className="slide-1"
            style={{ backgroundImage: "url('images/hero_1.jpg')" }}
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                      <h1 data-aos="fade-up" data-aos-delay="100">
                        Student Management
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime ipsa nulla sed quis rerum amet natus quas
                        necessitatibus.
                      </p>
                    </div>

                    <div
                      className="col-lg-5 ml-auto"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <form
                        className="form-box"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <h3 className="h4 text-black mb-4">Update Student</h3>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Student Name"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter age"
                            name="age"
                            value={student.age}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter course"
                            name="course"
                            value={student.course}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-primary btn-pill"
                            value="Update Student"
                          />
                        </div>
                      </form>
                      {/* Debugging: Display student data in console */}
                      {console.log("Student Data:", student)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UpdateStudent;
