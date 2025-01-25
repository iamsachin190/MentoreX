import React from "react";

const AnalysisPage = ({ userData, analysisResults }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Analysis Report
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Here’s your analysis report based on the details you provided.
        </p>

        {/* User Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Your Details</h2>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Skills:</strong> {userData.skills || "Not Provided"}
            </p>
            <p>
              <strong>Experience:</strong> {userData.experience} years
            </p>
            <p>
              <strong>Desired Job Role:</strong> {userData.jobRole}
            </p>
          </div>
        </div>

        {/* Gap Analysis Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Skill Gap</h2>
          <p className="text-gray-600 mt-2">
            Below are the skills missing for the desired job role:
          </p>
          <ul className="list-disc list-inside mt-4">
            {analysisResults.skillGap.length > 0 ? (
              analysisResults.skillGap.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No skill gaps identified.</li>
            )}
          </ul>
        </div>

        {/* Suggested Learning Path Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Suggested Learning Path
          </h2>
          <p className="text-gray-600 mt-2">
            Here are the recommended steps to bridge the gap and achieve your
            goals:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            {analysisResults.learningPath.length > 0 ? (
              analysisResults.learningPath.map((step, index) => (
                <li key={index} className="text-gray-700">
                  {step}
                </li>
              ))
            ) : (
              <li className="text-gray-500">
                No recommendations available. Keep exploring!
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
