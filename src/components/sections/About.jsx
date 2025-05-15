import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "Javascript",
  ];

  const backendSkills = ["Node.js", "Java", "PHP", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-rose-100 bg-clip-text text-transparent text-center">
            {" "}
            ABOUT ME
          </h2>

          <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-800/20 text-rose-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-800/20 text-rose-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8 grid-span-8">
            <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all  col-start-1 ">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <p>
                  <strong> WEST-MEC CODING PROGRAM </strong> <br/>
                  | 2023-2025 |
                </p>
                <li className="indent-8">
                  900 hour hands on technical training in modern programming and web development building front-end, server-side, and application
                </li>

                  <br/> <br/>
                 <p>
                  <strong> ESTRELLA COMMUNITY COLLEGE</strong> <br/>
                    | 2024-Present |
                </p>
                <li className="indent-8">
                   Hands on proficiency in programming languages and modern development frameworks and reaching towards bachelors in computer science.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    CHUCK ENTERTAINMENT CHEESE  <br/>|2023 - 2024 |{" "}
                  </h4>
                  <li className="indent-8">
                    Supported kitchen operations to ensure quality service while maintaning a clean environment while providing prompt customer assistance

                  </li>
                </div>

                <br/>
                <div>
                  <h4 className="font-semibold">
                    {" "} WORKED BASED LEARNING ALLIANCE WEBSITE (CRAMN) <br />
                    | 2024 |{" "}
                  </h4>
                  <li className="indent-8">
                    Developed and presented a fashion-themed website with a team of five under the guidance of an industry professional.
                  </li>
                </div>
              </div>
            </div>

            <div className="grid col-span-4 col-start-1">
              <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all col-span-8 col-start-2">
                   <h3 className="text-xl font-bold mb-4 text-center"> Certification </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <p>
                  <strong> Information Technology Specialist HTML5  </strong> <br/>
                  | 2024 |
                </p>
                <li className="indent-8">
                 Forms, Validation, Layout, Flexible UI.  Javascript, Dom manipulation
                </li>

                <br />
                 <p>
                  <strong> Information Technology Specialist Javascript </strong> <br/>
                    | 2025 |
                </p>
                <li className="indent-8">
                   Operators, Debugging, Data Types, Functions, Expressions, DOM, CRUD API
                </li>
              </ul>
            </div>

 </div>
          </div>


        </div>
      </RevealOnScroll>
    </section>
  );
};