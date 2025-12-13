import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Zap, 
  Brain, 
  ListTodo, 
  UserCheck, 
  TrendingUp 
} from "lucide-react";

// REMOVE 'LucideIcon' from imports if it causes issues

interface PromptItem {
  id: number;
  icon: any; // Changed to 'any' to prevent import errors
  title: string;
  text: string;
}

const promptData: PromptItem[] = [
  {
    id: 1,
    icon: Zap,
    title: "Daily Focus Plan",
    text: "Give me a simple 3-task daily focus plan based on these goals: [your goals]. Make it realistic and ordered by impact.",
  },
  {
    id: 2,
    icon: Brain,
    title: "Deep Work Planner",
    text: "I have 2 hours for deep work. Help me create a step-by-step work session with breaks, checkpoints, and what I should avoid.",
  },
  {
    id: 3,
    icon: ListTodo,
    title: "Task Breakdown",
    text: "Break this big task into small actionable steps I can finish in under 20 minutes each: [describe your task].",
  },
  {
    id: 4,
    icon: UserCheck,
    title: "Productivity Coach",
    text: "Act as my productivity coach. Ask me relevant questions, identify distractions, and give me a strategy for staying focused today.",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Weekly Review",
    text: "Review my week: [list what you did]. Identify mistakes, wins, patterns, and create a better weekly plan for next week.",
  },
];

export default function Productive() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
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

      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white pb-20">
        
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Productivity <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">AI Prompts</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time figuring out what to ask. Use these battle-tested prompts 
            to streamline your workflow, organize your day, and get more done.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {promptData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
                  {/* Render the icon component safely */}
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-4 mb-5 font-mono text-sm text-slate-300 leading-relaxed shadow-inner">
                {item.text}
              </div>

              <button
                onClick={() => handleCopy(item.text, item.id)}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 ${
                  copiedId === item.id
                    ? "bg-emerald-500 text-slate-950"
                    : "bg-slate-800 text-white hover:bg-slate-700 hover:text-emerald-400"
                }`}
              >
                {copiedId === item.id ? (
                  <>
                    <Check size={18} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4">Need something else?</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-800 hover:bg-emerald-600 text-white font-bold transition-all duration-300 hover:scale-105"
          >
            Explore More Categories
          </Link>
        </div>
      </div>
    </>
  );
}