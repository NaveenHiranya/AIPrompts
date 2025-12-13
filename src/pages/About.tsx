import { Link } from "react-router-dom"; // React Router
import { Helmet, HelmetProvider } from "react-helmet-async"; // SEO
// import avatar from "../assets/avatar.png"; // your photo

export default function AboutMe() {
  return (
    <HelmetProvider>
      {/* SEO */}
      <Helmet>
        <title>About Naveen Hiranya</title>
        <meta
          name="description"
          content="Learn about Naveen, an undergraduate in Management and IT at the University of Kelaniya, passionate about AI Prompt Engineering and full-stack web development."
        />
      </Helmet>

      {/* Go Back Button */}
      <div className="m-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition"
        >
          ← Go Back
        </Link>
      </div>

      {/* About Me Section */}
      <section className="m-6 p-6 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row gap-6">
        {/* IMAGE */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            // src={avatar}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-emerald-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center gap-4">
          <h1 className="text-[6vw] lg:text-[3vw] font-extrabold text-emerald-400">
            About Me
          </h1>
          <p className="text-[2.2vw] lg:text-[1.2vw] text-gray-300 leading-relaxed">
            Hi, I’m Naveen, an undergraduate in Management and Information Technology at the University of Kelaniya, Sri Lanka.
            I’m currently training as a full-stack web developer, building modern, responsive websites.
          </p>
          <p className="text-[2.2vw] lg:text-[1.2vw] text-gray-400 leading-relaxed">
            I’m passionate about AI, especially <strong>AI Prompt Engineering</strong> and <strong>AI API-integrated websites</strong>,
            creating tools that help users unlock creativity and productivity.
          </p>
        </div>
      </section>
    </HelmetProvider>
  );
}
