import { Helmet } from "react-helmet-async";

export default function Banner() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Productivity AI Prompts | Vnix AI Prompts</title>
        <meta
          name="description"
          content="Discover powerful productivity prompts you can use in any AI tool. Boost efficiency, focus, and task completion with Vnix AI Prompts."
        />
        <link
          rel="canonical"
          href="https://ai-prompts-coral.vercel.app/productivity-prompt"
        />
      </Helmet>

      {/* UI */}
      <div className="m-4 p-4 rounded-2xl bg-gradient-to-tl from-emerald-600 to-emerald-800">
        <h2 className="font-bold text-3xl">
          Powerful Productivity Prompts You Can Use In Any AI Tool
        </h2>

        <p className="font-bold my-5">
          “These prompts will boost your productivity and help you complete your
          tasks efficiently.”
        </p>

        <a
          className="px-4 py-2 bg-green-600 font-bold rounded-2xl"
          href="/productivity-prompt"
        >
          GO
        </a>
      </div>
    </>
  );
}
