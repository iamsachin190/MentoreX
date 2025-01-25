import React, { useState } from "react";

const EnterDetailsForm = () => {
  const [formData, setFormData] = useState({
    skills: "",
    experience: "",
    job_preferences: "",
  });

  const [error, setError] = useState("");

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.skills || !formData.experience || !formData.job_preferences) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Simulate submission (replace with API call)
    console.log("User Details Submitted:", formData);
    alert("Details submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Enter Your Details
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please fill out the form below to help us analyze your profile.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., React, Node.js, Python"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
            />
          </div>
          <div>
            <label
              htmlFor="job_preferences"
              className="block text-sm font-medium text-gray-700"
            >
              Job Preferences
            </label>
            <input
              type="text"
              id="job_preferences"
              name="job_preferences"
              value={formData.job_preferences}
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Frontend Developer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterDetailsForm;
