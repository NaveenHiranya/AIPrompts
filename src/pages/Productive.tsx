import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Productive() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Productivity AI Prompts | Vnix AI Prompts</title>
        <meta
          name="description"
          content="Boost your productivity with powerful AI prompts you can use in any AI tool. Daily focus, deep work, task breakdown, and productivity coaching prompts."
        />
        <link
          rel="canonical"
          href="https://ai-prompts-coral.vercel.app/productivity-prompt"
        />
      </Helmet>

      {/* PAGE */}
      <div className="m-4 p-1 rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400">
        <div className="rounded-3xl bg-slate-950 p-6 space-y-6 text-white">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="font-extrabold text-[7vw] md:text-[4vw] text-emerald-400 leading-tight">
              Productivity AI Prompts
            </h1>
            <p className="font-bold text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Powerful productivity prompts you can use in any AI tool to
              improve focus, efficiency, and results.
            </p>
          </div>

          {/* PROMPTS */}
          <div className="grid gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "1️⃣ Daily Focus Prompt",
                text:
                  "Give me a simple 3-task daily focus plan based on these goals: [your goals]. Make it realistic and ordered by impact.",
              },
              {
                title: "2️⃣ Deep Work Planner",
                text:
                  "I have 2 hours for deep work. Help me create a step-by-step work session with breaks, checkpoints, and what I should avoid.",
              },
              {
                title: "3️⃣ Task Breakdown Prompt",
                text:
                  "Break this big task into small actionable steps I can finish in under 20 minutes each: [describe your task].",
              },
              {
                title: "4️⃣ Productivity Coach Prompt",
                text:
                  "Act as my productivity coach. Ask me relevant questions, identify distractions, and give me a strategy for staying focused today.",
              },
              {
                title: "5️⃣ Weekly Improvement Prompt",
                text:
                  "Review my week: [list what you did]. Identify mistakes, wins, patterns, and create a better weekly plan for next week.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-emerald-500/30 p-5 rounded-2xl shadow-lg hover:border-emerald-400 transition"
              >
                <h2 className="text-xl font-semibold text-emerald-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          {/* BACK BUTTON */}
          <div className="flex justify-center pt-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition"
            >
              ← Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
