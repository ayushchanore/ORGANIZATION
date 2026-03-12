import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../config";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    address: "",
    height: "",
    weight: "",
    medicalConditions: "",
    infectiousDiseases: "",
    medications: "",
    habits: "",
    organs: [],
    donationType: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      organs: checked
        ? [...prev.organs, value]
        : prev.organs.filter((org) => org !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/donor/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Donor registration successful!");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Error submitting form");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-green-700 text-center">
          Organ Donor Registration Form
        </h1>

        {/* Personal Details */}
        <h2 className="text-lg font-semibold text-gray-700">
          1. Personal Details
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <select
            name="gender"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="bloodGroup"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>AB+</option><option>AB-</option>
            <option>O+</option><option>O-</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <textarea
          name="address"
          placeholder="Residential Address"
          onChange={handleChange}
          required
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        {/* Medical Information */}
        <h2 className="text-lg font-semibold text-gray-700">
          2. Medical Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <textarea
          name="medicalConditions"
          placeholder="Existing Medical Conditions (if any)"
          onChange={handleChange}
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <textarea
          name="infectiousDiseases"
          placeholder="Infectious Diseases (if any)"
          onChange={handleChange}
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <textarea
          name="medications"
          placeholder="Current Medications"
          onChange={handleChange}
          rows="2"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <select
          name="habits"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Smoking / Alcohol</option>
          <option>None</option>
          <option>Smoking</option>
          <option>Alcohol</option>
          <option>Both</option>
        </select>

        {/* Donation Preferences */}
        <h2 className="text-lg font-semibold text-gray-700">
          3. Donation Preferences
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["Kidney", "Liver", "Heart", "Lungs", "Pancreas", "Eyes"].map(
            (organ) => (
              <label
                key={organ}
                className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer hover:bg-green-50"
              >
                <input
                  type="checkbox"
                  value={organ}
                  onChange={handleCheckboxChange}
                  className="accent-green-600"
                />
                <span>{organ}</span>
              </label>
            )
          )}
        </div>

        {/* <select
          name="donationType"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option value="">Select Donation Type</option>
          <option>Living Donation</option>
          <option>After Death Donation</option>
        </select> */}

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Submit Donor Form
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default DonorForm;
