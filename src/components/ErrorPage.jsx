import { Link } from "react-router-dom";

export default function ErrorPage({ code, message, image }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl p-8 md:p-16 h-[80vh] shadow-sm border border-gray-100 relative overflow-hidden">

      {/* TEXT CONTENT  */}
      <div className="flex-1 flex flex-col items-start justify-center z-10 text-left">
        {/* ERROR CODE */}
        <h1 className="text-[120px] leading-none font-black text-blue-600 mb-2 drop-shadow-sm">
          {code}
        </h1>

        {/* TITLE */}
        <p className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Oops! Something went wrong.
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-xl mb-10 max-w-md leading-relaxed">
          {message}
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.2)]"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* ANCHORED IMAGE */}
      <div className="flex-1 flex items-center justify-end mt-10 md:mt-0 relative h-full">
        <div className="relative w-full max-w-lg h-full flex items-end justify-center">

          <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl -z-10 transform scale-110"></div>
          
          <img
            src={image}
            alt={`Error ${code}`}
            className="w-full object-contain max-h-[90%] transform hover:scale-105 transition-transform duration-500"
            style={{ mixBlendMode: "multiply" }} 
          />
        </div>
      </div>

    </div>
  );
}