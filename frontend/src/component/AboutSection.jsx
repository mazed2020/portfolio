import { FaGithub } from "react-icons/fa";
import { PiPaintBrushBold } from "react-icons/pi";
import { LuCode } from "react-icons/lu"; 

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/bg-car.jpg')" // <-- replace with your image path
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 w-full">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">
          About <span className="text-indigo-400 font-bold">Me</span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaGithub className="text-3xl text-indigo-400" />}
            title="Projects"
            desc="Projects such as a Job Seeking app, AI Fake News Detection, and more — showcasing problem-solving and clean implementation."
          />

          <FeatureCard
            icon={<PiPaintBrushBold className="text-3xl text-indigo-400" />}
            title="UI / UX"
            desc="Designing intuitive, accessible interfaces with a focus on clarity, motion, and usability."
          />

          <FeatureCard
            icon={<LuCode className="text-3xl text-indigo-400" />}
            title="Web-Dev"
            desc="Full-stack builds with React, Node.js, Express, and MongoDB — performant, scalable, production-ready."
          />
        </div>
      </div>
    </section>
  );
}

/* --- Card component --- */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group relative rounded-[28px] bg-white/5 ring-1 ring-white/10 p-8 text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/10">
      {/* glow on hover */}
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-indigo-500/0 to-indigo-500/0 opacity-0 transition-opacity group-hover:opacity-10" />
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}
