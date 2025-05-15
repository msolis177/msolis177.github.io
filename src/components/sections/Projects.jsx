import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-rose-100 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Pokemon Shopping Website</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Javascript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-800/20 text-rose-100 py-1 px-3 rounded-full text-sm hover:bg-pink-100 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="#" className="text-rose-100 hover:text-green-800 transition-colors my-4"> View Project → </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-800/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)transition-all">
              <h3 className="text-xl font-bold mb-2">Trust US</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-800/20 text-rose-100 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-100 hover:text-green-800 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-800/40 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all">
              <h3 className="text-xl font-bold mb-2">MecAzon Project</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "MongoDB", "Express", "Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className=" bg-green-800/20 text-rose-100 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-rose-100 hover:text-green-800 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-green-800/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Community Center Website</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["Html", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-800/20 text-rose-100 py-1 px-3 rounded-full text-sm transition bg-green-800/20 hover:-translate-y-0.5 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-rose-100 hover:text-green-800 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};