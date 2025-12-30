  export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 px-6 py-10 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-white font-bold text-lg">
            Rizan Mohammed ismail
          </h3>
          <p>Software Developer</p>
        </div>

        <div className="flex gap-6">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/projects" className="hover:text-white">Projects</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        <div>
          <a
            href="mailto:iammd.uzair@gmail.com"
            className="hover:text-white"
          >
            rizanmohd030@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
  }
