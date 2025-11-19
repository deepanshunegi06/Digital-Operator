import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { useInView } from "react-intersection-observer";

const SkillsGrid = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            <span className="gradient-text-blue">Who We're Looking For</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're building a community of exceptional talent across all disciplines
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon as any;
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative h-48 sm:h-52"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

                {/* Card content */}
                <div className="relative h-full glass rounded-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden group-hover:glass-dark transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 mb-4"
                  >
                    <IconComponent className="w-12 h-12 text-purple-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.div>

                  {/* Skill name */}
                  <h3 className="relative z-10 text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
