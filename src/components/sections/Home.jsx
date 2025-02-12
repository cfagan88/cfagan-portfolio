import RevealOnScroll from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="h-[7rem] text-5xl md:text-7xl font-bold h-21 mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-right text-transparent">
            Chris Fagan
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full-Stack Software Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-md transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#projects"
              className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/20"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
