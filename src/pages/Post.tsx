import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";
import AdUnit50 from "../components/AdUnit50";
import AdUnitG from "../components/AdUnitG";

export default function NotFound() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(5);

  /* -------------------------------
      PROMPT LOADING COUNTDOWN
  --------------------------------*/
  useEffect(() => {
    if (counter === 0) {
      setLoading(false);
      return;
    }

    const t = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearTimeout(t);
  }, [counter]);

  /* -------------------------------
      COPY BUTTON + OPEN AD
  --------------------------------*/
  const copyPrompt = () => {
    if (post?.prompt) {
      navigator.clipboard.writeText(post.prompt);
      setCopied(true);

      // Open ad after small delay
      setTimeout(() => {
        window.open(
          "https://www.effectivegatecpm.com/udbfkap8f5?key=e61ce9290b438cdada71fde0ac68130f",
          "_blank"
        );
      }, 200);

      setTimeout(() => setCopied(false), 4000);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white flex flex-col gap-6">
      <AdUnit50 />
      {!post ? (
        <p className="text-center text-xl font-bold">No post found</p>
      ) : (
        <>
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center">{post.name}</h1>

          {/* PROMPT BOX */}
          <div className="max-w-2xl mx-auto w-full bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-semibold text-gray-300">Prompt</p>

              <button
                onClick={copyPrompt}
                disabled={loading}
                className={`px-4 py-2 rounded-lg font-bold transition ${
                  copied
                    ? "bg-green-800"
                    : loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-500"
                }`}
              >
                {loading ? `Wait... (${counter})` : copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* LOADING OR PROMPT */}
            {loading ? (
              <p className="text-gray-400 italic">Loading prompt... ({counter})</p>
            ) : (
              <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">
                {post.prompt}
              </p>
            )}
          </div>
        </>
      )}

      {/* GO HOME BUTTON */}
      <Link
        to="/"
        className="bg-green-600 w-max mx-auto px-6 py-3 rounded-lg text-white font-bold hover:bg-green-500 transition"
      >
        Go Home
      </Link>
      
      <AdUnitG />
      <div className="h-10" />
    </div>
  );
}
