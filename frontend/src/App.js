import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import React from "react";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfailure" element={<PaymentFailure />} />
      </Routes>
    </Router>
  );
}

export default App;