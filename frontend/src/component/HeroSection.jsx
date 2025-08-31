import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="bg-[#111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left column */}
        <div>
          <p className="text-lg text-gray-300">Hello It’s me</p>

          <h1 className="mt-2 text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block">Md Mazedul Islam</span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            And I’m a{" "}
            <span className="text-indigo-400">Full Stack Developer</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-300">
          Experienced Full Stack Developer specializing in building scalable web applications with React on the frontend and Node.js, Express, 
          and MongoDB on the backend. Skilled at creating user-friendly interfaces and robust server-side architectures,
           with a strong foundation in HTML, CSS, and JavaScript.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://web.facebook.com/mdmazedul.islam.965928/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition shadow-lg"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right column – avatar with glow */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 -z-10 rounded-full blur-2xl bg-indigo-500/30 scale-110"></div>

            <img
              src="/mazed.jpg"          /* replace with your image path */
              alt="mazed"
              className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover ring-8 ring-white/10 shadow-[0_0_80px_rgba(99,102,241,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
