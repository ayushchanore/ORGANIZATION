import react from 'react'
import coverImg from "../assets/cover.png";
import { Link } from 'react-router-dom';
import {ToastContainer} from "react-toastify"

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          BECOME A DONOR <br />
          <span className="text-blue-400">
            Make Your Life and Death Count!
          </span>
        </h1>

        <Link to="/donor">
          <button  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:scale-105">
            Become A Donor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
