export default function ContactSection() {
    return (
      <section id="contact" className="relative min-h-screen bg-[#0f0f12] text-white">
        {/* subtle curved overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full blur-3xl bg-indigo-600/20" />
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
  
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-3xl md:text-4xl font-semibold">
            Contact <span className="text-indigo-400 font-bold">Me</span>
          </h2>
  
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* LEFT: copy + socials */}
            <div>
              <h3 className="text-3xl font-semibold">Let’s Talk To Us</h3>
              <p className="mt-3 max-w-md text-gray-300 leading-relaxed">
                Have some big idea or brand to develop and need help? Then we’d
                love to hear about your project and provide help.
              </p>
  
              <div className="mt-8">
                <h4 className="text-2xl font-semibold">Email</h4>
                <span
                   
                  className="mt-2 block text-gray-300 hover:text-white"
                >
                  mazedulislam959@gmail.com
                </span>
              </div>
  
              <div className="mt-8">
                <h4 className="text-2xl font-semibold">Socials</h4>
                <ul className="mt-2 space-y-2 text-indigo-300">
                  <li>
                    <a
                      href="https://github.com/mazed2020"
                      className="underline hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline hover:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mdmazedulislammazed/"
                      className="underline hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* RIGHT: form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit here
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="sr-only">First Name</span>
                  <input
                    type="text"
                    placeholder="First Name*"
                    required
                    className="w-full rounded-md bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-indigo-400"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Last Name</span>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    required
                    className="w-full rounded-md bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-indigo-400"
                  />
                </label>
              </div>
  
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full rounded-md bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-indigo-400"
                />
              </label>
  
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  type="tel"
                  placeholder="Phone number*"
                  className="w-full rounded-md bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-indigo-400"
                />
              </label>
  
              <label className="block">
                <span className="sr-only">Your Message</span>
                <textarea
                  rows={5}
                  placeholder="Your Message*"
                  className="w-full rounded-md bg-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-indigo-400"
                />
              </label>
  
              <button
                type="submit"
                className="w-full md:w-auto rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  