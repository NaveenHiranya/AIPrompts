import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>

      <Link
        to="/"
        className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold"
      >
        Go Home
      </Link>
    </div>
  );
}
