import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 to-rose-100 bg-clip-text text-transparent leading-right">
            Hi, I am Mirella
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Driven full-stack web developer with 900+ hours of experience developing responsive, scalable web applications using modern technologies and frameworks.

          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects"className="bg-rose-100 text-green-800 border border-green-800 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

            <a href="#contact" className="border border-rose-100/50 text-rose-100 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"> Contact Me</a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};