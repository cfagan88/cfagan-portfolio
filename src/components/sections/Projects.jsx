import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2">
                Northcoders News Backend
              </h3>
              <p className="text-gray-400 mb-4 font-extralight">
                News article API enabling request/post/edit/deletion of articles
                and comments, as well as appropriate error handling and a full,
                dynamic testing suite.
              </p>
              <div>
                {["JavaScript", "Node.js", "PSQL", "Jest", "Supabase"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  )
                )}

                <div className="flex justify-end">
                  <a
                    href="https://github.com/cfagan88/nc-news"
                    className="text-gray-300 hover:text-blue-300 hover:underline transition-colors mt-4"
                  >
                    View project on GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2">
                Northcoders News Frontend
              </h3>
              <p className="text-gray-400 mb-4 font-extralight">
                React app for articles and comments using the Northcoders News
                backend, enabling filtering of results, voting and commenting on
                articles.
              </p>
              <div>
                {["React", "Vite", "HTML", "CSS"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}

                <div className="flex justify-end">
                  <a
                    href="https://cf-nc-news.netlify.app/"
                    className="text-gray-300 hover:text-blue-300 hover:underline transition-colors mt-4"
                  >
                    View hosted site
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2">
                TailGotchi Full Stack App
              </h3>
              <p className="text-gray-400 mb-4 font-extralight">
                Collaborative, pet-owner based task management app with
                real-time updates and user authentication. Built as a group
                project (team of 4).
              </p>
              <div>
                {["React", "TypeScript", "Supabase", "Tailwind"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  )
                )}

                <div className="flex justify-end">
                  <a
                    href="https://tailgotchi.netlify.app/"
                    className="text-gray-300 hover:text-blue-300 hover:underline transition-colors mt-4"
                  >
                    View hosted site
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2">Movie Database</h3>
              <p className="text-gray-400 mb-4 font-extralight">
                Movie database search app, fetching and displaying data from a
                public API. Includes ability to save searched films within your
                "favourites" list
              </p>
              <div>
                {["React", "Vite", "HTML", "CSS", "API"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}

                <div className="flex justify-end">
                  <a
                    href="https://github.com/cfagan88/React-Movie-DB"
                    className="text-gray-300 hover:text-blue-300 hover:underline transition-colors mt-4"
                  >
                    View project on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
