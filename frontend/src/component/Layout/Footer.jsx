export default function Footer() {
    return (
      <footer className=" fixed bottom-0 w-full bg-black text-gray-300 py-8"> {/* changed py-4 → py-8 */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mazedul. All rights reserved.
          </p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a
              href="https://github.com/mazed2020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mdmazedulislammazed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  