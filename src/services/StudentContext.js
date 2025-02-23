import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import StudentManagementABI from "../services/StudentManagement.json"; // Import ABI

export const StudentContext = createContext();

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed address
const contractABI = StudentManagementABI.abi;

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const studentContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(studentContract);
        fetchStudents(studentContract);
      } else {
        console.error("MetaMask is not installed!");
      }
    };

    initializeContract();
  }, []);

  const fetchStudents = async (contract) => {
    try {
      const studentList = [];
      for (let i = 1; i <= 10; i++) {
        try {
          const [id, name, age, course] = await contract.getStudent(i);
          if (id !== 0) {
            studentList.push({
              id: id.toString(),
              name,
              age: age.toString(),
              course,
            });
          }
        } catch (error) {
          break;
        }
      }
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (name, age, course) => {
    try {
      const tx = await contract.addStudent(name, parseInt(age), course);
      await tx.wait();
      alert("Student added successfully!");
      fetchStudents(contract);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const updateStudent = async (id, name, age, course) => {
    try {
      const tx = await contract.updateStudent(id, name, parseInt(age), course);
      await tx.wait();
      alert("Student updated successfully!");
      fetchStudents(contract);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const tx = await contract.deleteStudent(id);
      await tx.wait();
      alert("Student deleted successfully!");
      fetchStudents(contract);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
