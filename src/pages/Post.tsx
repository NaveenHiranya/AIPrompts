import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";

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
      MAIN INVOKE AD LOADER
  --------------------------------*/
  useEffect(() => {
    const oldScript = document.getElementById("ad-script");
    if (oldScript) oldScript.remove();

    const adContainer = document.getElementById(
      "container-156795e882446485cb5379ce3382344c"
    );
    if (adContainer) adContainer.innerHTML = "";

    const script = document.createElement("script");
    script.id = "ad-script";
    script.async = true;
    script.src =
      "//pl28179829.effectivegatecpm.com/156795e882446485cb5379ce3382344c/invoke.js";

    document.body.appendChild(script);
  }, [id]);

  /* -------------------------------------
      SECOND AD SCRIPT (BEST PLACEMENT)
  --------------------------------------*/
  useEffect(() => {
    const oldAd2 = document.getElementById("ad-script-2");
    if (oldAd2) oldAd2.remove();

    const script2 = document.createElement("script");
    script2.id = "ad-script-2";
    script2.type = "text/javascript";
    script2.src =
      "//pl28185165.effectivegatecpm.com/8e/d9/e0/8ed9e0d494732c88c49514fe24b93a32.js";

    document.body.appendChild(script2);
  }, [id]);

  /* -------------------------------
      COPY BUTTON + OPEN AD
  --------------------------------*/
  const copyPrompt = () => {
    if (post?.prompt) {
      navigator.clipboard.writeText(post.prompt);
      setCopied(true);

      // small delay → open ad
      setTimeout(() => {
        window.open(
          "https://www.effectivegatecpm.com/udbfkap8f5?key=e61ce9290b438cdada71fde0ac68130f",
          "_blank" // change to "_self" for same tab
        );
      }, 800);

      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white flex flex-col gap-6">
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
                {loading ? "Wait..." : copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* LOADING OR PROMPT */}
            {loading ? (
              <p className="text-gray-400 italic">
                Loading prompt... ({counter})
              </p>
            ) : (
              <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">
                {post.prompt}
              </p>
            )}
          </div>
        </>
      )}

      {/* SECOND AD (best spot) */}
      <div className="max-w-2xl mx-auto my-4" id="ad-slot-2"></div>

      {/* INVOKE AD */}
      <div
        id="container-156795e882446485cb5379ce3382344c"
        className="max-w-2xl mx-auto"
      />

      {/* GO HOME BUTTON */}
      <Link
        to="/"
        className="bg-green-600 w-max mx-auto px-6 py-3 rounded-lg text-white font-bold hover:bg-green-500 transition"
      >
        Go Home
      </Link>

      <div className="h-10" />
    </div>
  );
}
