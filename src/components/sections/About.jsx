function About() {
  const frontendSkills = [
    "React",
    "Vite",
    "HTML",
    "TypeScript",
    "CSS",
    "Tailwind",
  ];
  const backendSkills = [
    "JavaScript",
    "Node.js",
    "Jest",
    "SQL/PSQL",
    "Supabase",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            My name is Chris; I'm a full-stack developer based in Hertfordshire,
            UK. I enjoy creating clean, efficient web-applications. My goal is
            to build solutions that offer both high performance as well as a
            great user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2]] transition"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2]] transition"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-inside text-gray-300 space-y-2">
              <li className="font-semibold list-disc">Javascript Bootcamp</li>
              <li className="font-extralight px-6">Northcoders (2024-2025)</li>
              <li className="font-semibold list-disc">BSc in Psychology</li>
              <li className="font-extralight px-6">
                University of Nottingham (2010)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <ul className="list-inside text-gray-300 space-y-2">
              <li className="font-semibold list-disc">
                Market Research Director
              </li>
              <li className="font-extralight px-6">
                Various companies including Nielsen, MetrixLab, Ibotta
                (2011-2024)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
