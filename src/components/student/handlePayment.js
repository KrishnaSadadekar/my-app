import axios from "axios";


const handlePayment = async (student, token) => {
  if (!student) {
    console.error("Student details are missing for payment.");
    alert("Unable to proceed with payment. Student details are missing.");
    return;
  }

  const options = {
    key: "rzp_test_J4gQkx1Sk61kFL",
    amount: 28000 * 100,
    currency: "INR",
    name: "school of Coding",
    description: "Test",
    order_id: await createOrder(student,token).id,
    handler: async (response) => {
      try {
        console.log("Payment Response:", response.razorpay_payment_id);
        const verificationResponse = await axios.post(
          `${BASE_STUDENT_URL}/verifypayment`,
          {
            email:student.user.email,
            razorpay_payment_id: response.razorpay_payment_id
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Verified payment data:", verificationResponse.data);
      } catch (error) {
        console.error("Payment Verification Error:", error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

export default handlePayment;

const createOrder = async (student,token) => {
  const response = await axios.post(
    `${BASE_STUDENT_URL}/createOrder`,
    {
      amount: 28000, // Amount in INR
      studentId: student.sid, // Unique student ID
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
