import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import StudentHeader from "../student/StudentHeader";
import axios from "axios";

const StudentBatch = () => {
  const token = sessionStorage.getItem("token");
  const email = sessionStorage.getItem("email");
  const { page } = useParams(); // Get the page number from URL params
  const navigate = useNavigate();

  const [batches, setBatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 0); // Default to page 0 if undefined
  const totalPages = 5; // Example total pages; adjust based on actual backend pagination

  // Fetch student batches based on the current page
  const fetchBatches = async () => {
    try {
      const data = await getStudentBatches(
        email,
        token,
        currentPage,
        totalPages
      );
      setBatches(data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, [currentPage, email, token, totalPages]);

  // Mark attendance for a specific batch
  const markAttendance = async (batchId, attendeeStatus) => {
    try {
      console.log(
        `Marking attendance: ${email}, Batch ID: ${batchId}, Status: ${attendeeStatus}`
      );
      const response = await axios.post(
        `${BASE_URL}/mark`,
        { email, bid: batchId, attendeeStatus: attendeeStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Attendance marked successfully!");
      fetchBatches(); // Refresh the batch data
    } catch (error) {
      console.error("Error marking attendance:", error);
      alert("Failed to mark attendance. Please try again.");
    }
  };

  // Handle previous page navigation
  const handlePrevPage = () => {
    if (currentPage > 0) {
      navigate(`/mark/${currentPage - 1}`);
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Handle next page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      navigate(`/mark/${currentPage + 1}`);
      setCurrentPage((prev) => prev + 1);
    }
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
            
              <div
                className="container-fluid d-flex justify-content-center flex-column"
                style={{ minHeight: "100vh" }}
              >
                <div className="row justify-content-center">
                  {batches.length > 0 ? (
                    batches.map((b, index) => (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 mb-4"
                        key={index}
                      >
                        <div className="card h-100 shadow-sm">
                          <div className="card-body d-flex flex-column">
                            <h4 className="card-title text-center mb-3">
                              {b.batchCode || "Null"}
                            </h4>
                            <ul className="list-group list-group-flush mb-3 flex-grow-1">
                              <li className="list-group-item">
                                <strong>Course:</strong> {b.courseName || "N/A"}
                              </li>
                              <li className="list-group-item">
                                <strong>Trainer:</strong> {b.trainer || "N/A"}
                              </li>
                              <li className="list-group-item">
                                <strong>Class Timing:</strong> {b.slot || "N/A"}
                              </li>

                              <li className="list-group-item">
                                <strong>Days Attended:</strong>{" "}
                                {b.dayAttended+'/'+b.batchDay || 0}
                              </li>
                            </ul>
                            {b.batchDay>b.dayAttended&&
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                markAttendance(b.batchId, b.attendanceStatus)
                              }
                            >
                              Mark attendance!
                            </button>}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      <p className="text-muted">No batches available</p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div
                    className="pagination-container d-flex justify-content-center mt-4"
                    style={{ zIndex: "1" }}
                  >
                    <button
                      className={`btn btn-outline-primary mx-3 ${
                        currentPage === 0 ? "disabled" : ""
                      }`}
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                    >
                      &lt; Previous
                    </button>
                    <button
                      className={`btn btn-outline-primary mx-3 ${
                        currentPage === totalPages - 1 ? "disabled" : ""
                      }`}
                      onClick={handleNextPage}
                      disabled={batches.length == 0}
                    >
                      Next &gt;
                    </button>
                  </div>
                )}
              </div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentBatch;
