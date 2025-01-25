import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
    {/* Navbar */}
  
    {/* Spline Viewer Background */}
    <div
      className="absolute inset-0 z-0 opacity-70 transition-opacity duration-1000 ease-in-out"
      style={{ top: '-350px' }} // Adjust the value to move the planet upwards
    >
      <Spline
        scene="https://prod.spline.design/Lw0hU5lNQETQFCI6/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  
    {/* Content Section */}
    <div className="relative z-10 pt-24 px-6 ">
      {/* Hero Section */}
      <section className="mt-20 flex flex-col items-center justify-center text-white p-12 text-center rounded-lg mb-12 transition-all duration-1000 ease-in-out">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-8"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Welcome to MentoreX
        </h1>
        <p
          className="text-xl md:text-2xl font-light mb-8"
          style={{
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.6",
            textShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
        Helping You Land the Job You Deserve.
        </p>
        <div className="flex justify-center space-x-4">
  <Link to="/pdfupload">
    <button
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-lg md:text-xl px-6 py-3 rounded hover:opacity-90 transition text-white shadow-lg"
    >
      Upload PDF
    </button>
  </Link>
  <Link to="/details">
    <button
      className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-lg md:text-xl px-6 py-3 rounded hover:opacity-90 transition text-white shadow-lg"
    >
      Enter Details
    </button>
  </Link>
</div>

      </section>
  
      {/* Highlights Section */}
     {/* Highlights Section */}
<section className="flex flex-col items-center justify-center text-white p-6 rounded-lg transition-all duration-1000 ease-in-out text-center">
  {/* Text Content */}
  <div
    className="max-w-2xl"
    style={{ fontFamily: "'Roboto', sans-serif" }}
  >
    <h2
      className="text-2xl md:text-3xl font-bold mb-6"
      style={{
        letterSpacing: "1.5px",
        textShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
      }}
    >
      About Our Platform
    </h2>
    <p className="text-base md:text-lg mb-4">
      Our platform is a one-stop solution for students and recruiters to bridge
      the skill gap and unlock career opportunities. We empower students to
      analyze their skills, create professional portfolios, and access learning
      resources tailored to their desired roles. Meanwhile, recruiters can
      easily discover and assess top talent through AI-powered portfolio
      insights and interactive chatbot assistance.
    </p>
    <p className="text-base md:text-lg">
      Join us in transforming the way careers are built and talent is
      discovered. Whether you're a student seeking guidance or a recruiter
      looking for the perfect candidate, we've got you covered.
    </p>
  </div>
</section>


    </div>
  </div>
  
  );
}
