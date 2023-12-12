import { Link } from "react-router-dom";

function ErrorFallBack() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3 className="text-lg font-bold">There was an error...</h3>
      <Link to="discover">
        <button className="border border-white/80 px-5 py-3 hover:border-black hover:bg-white hover:text-black">
          Back to homepage
        </button>
      </Link>
    </div>
  );
}

export default ErrorFallBack;
