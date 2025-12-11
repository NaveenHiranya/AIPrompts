import { Link } from "react-router-dom";
export default function Productive() {
  return (
    <div className="space-y-6 p-4">
      <h2 className="font-bold text-3xl">
        Powerful Productivity Prompts You Can Use In Any AI Tool
      </h2>
      <p className="font-bold my-5">
        “These prompts will boost your productivity and help you complete your
        tasks efficiently.”
      </p>
      <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">1️⃣ Daily Focus Prompt</h2>
        <p>
          “Give me a simple 3-task daily focus plan based on these goals:
          <span className="font-semibold">[your goals]</span>. Make it realistic
          and ordered by impact.”
        </p>
      </div>

      <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">2️⃣ Deep Work Planner</h2>
        <p>
          “I have 2 hours for deep work. Help me create a step-by-step work
          session with breaks, checkpoints, and what I should avoid.”
        </p>
      </div>

      <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">3️⃣ Task Breakdown Prompt</h2>
        <p>
          “Break this big task into small actionable steps I can finish in under
          20 minutes each:
          <span className="font-semibold">[describe your task]</span>.”
        </p>
      </div>

      <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          4️⃣ Productivity Coach Prompt
        </h2>
        <p>
          “Act as my productivity coach. Ask me relevant questions, identify
          distractions, and give me a strategy for staying focused today.”
        </p>
      </div>

      <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          5️⃣ Weekly Improvement Prompt
        </h2>
        <p>
          “Review my week:{" "}
          <span className="font-semibold">[list what you did]</span>. Identify
          mistakes, wins, patterns, and create a better weekly plan for next
          week.”
        </p>
      </div>

      <Link
        to="/"
        className="bg-green-600 w-max mx-auto px-4 py-2 rounded-lg text-white font-bold"
      >
        Go Home
      </Link>
    </div>
  );
}
