import { motion } from "framer-motion";
import { Users, Briefcase, Zap, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  {
    icon: Users,
    title: "Work with Skilled Professionals",
    description: "Collaborate with talented, motivated people from around the world",
  },
  {
    icon: Briefcase,
    title: "Build Your Portfolio",
    description: "Create real projects that showcase your skills and expertise",
  },
  {
    icon: Zap,
    title: "Learn and Grow",
    description: "Expand your network and continuously learn from others",
  },
  {
    icon: Target,
    title: "Results-Driven Community",
    description: "Be part of a small team where output and impact truly matter",
  },
];

const BenefitsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight">
            <span className="gradient-text">Why Join Digital Operators</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full glass-dark rounded-xl p-5 sm:p-8 overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Top border accent on hover */}
                  <motion.div
                    className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300"
                    >
                      <Icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
