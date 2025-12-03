import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 text-center bg-black h-screen flex flex-col justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">404 | Page Not Found</h1>
      <p className="mb-4">Oops! Why are you hear...</p>

      <Link
        to="/"
        className="bg-green-600 w-max mx-auto px-4 py-2 rounded-lg text-white font-bold"
      >
        Go Home
      </Link>
    </div>
  );
}
