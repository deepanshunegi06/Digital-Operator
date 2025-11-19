import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";

const CommunityVision = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30"></div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="gradient-text">Shape Something From The Ground Up</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Even though we're just starting out, this is your chance to be part of something exciting from day one. Help us build the future of Digital Operators and establish the culture, standards, and success stories that will define our community for years to come.
          </motion.p>

          {/* Key points */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm"
          >
            {["Founding Member", "Build Legacy", "Shape Culture"].map(
              (point, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg py-4 px-6"
                >
                  <p className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                    {point}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityVision;
