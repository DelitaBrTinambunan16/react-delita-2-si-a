import { Link } from "react-router-dom";

const ErrorPage = ({ code, message, image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gray-100">
      
      {/* IMAGE */}
      {image && (
        <img 
          src={image}
          alt={`Error ${code}`}
          className="w-56 md:w-64 mb-8 mx-auto"
        />
      )}

      {/* CODE */}
      <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-3">
        {code}
      </h1>

      {/* MESSAGE */}
      <p className="text-gray-500 text-base md:text-lg mb-6 max-w-md">
        {message}
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm md:text-base hover:bg-indigo-700 transition"
      >
        Back to Dashboard
      </Link>

    </div>
  );
};

export default ErrorPage;