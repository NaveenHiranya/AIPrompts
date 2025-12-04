import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [copied, setCopied] = useState(false);

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

  const copyPrompt = () => {
    if (post?.prompt) {
      navigator.clipboard.writeText(post.prompt);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 4000); // 4 seconds
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white flex flex-col gap-6">
      {!post ? (
        <p className="text-center text-xl font-bold">No post found</p>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center">{post.name}</h1>

          <div className="max-w-2xl mx-auto w-full bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-semibold text-gray-300">Prompt</p>

              <button
                onClick={copyPrompt}
                className={`px-4 py-2 rounded-lg font-bold transition ${
                  copied ? "bg-green-800" : "bg-green-600 hover:bg-green-500"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">
              {post.prompt}
            </p>
          </div>
        </>
      )}

      <div
        id="container-156795e882446485cb5379ce3382344c"
        className="max-w-2xl mx-auto"
      />

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
