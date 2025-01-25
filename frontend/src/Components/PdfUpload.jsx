import React, { useState } from "react";

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  // File validation for PDF
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setError(""); // Clear any previous error
    } else {
      setError("Please upload a valid PDF file.");
      setSelectedFile(null);
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("resume", selectedFile);

      // Simulate file upload (replace with actual API call)
      console.log("Uploading file:", selectedFile.name);
      alert("Resume uploaded successfully!");
    } else {
      setError("Please upload a PDF file before submitting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Upload Your Resume
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please upload your resume in PDF format to proceed with the analysis.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-black"
            >
              Upload Resume (PDF Only)
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1 block w-full text-black bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Upload Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadResume;
