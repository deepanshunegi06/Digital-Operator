import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ onCTAClick }: { onCTAClick: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
        >
          <span className="gradient-text block">Digital Operators</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
        >
          An exclusive community of doers, creatives, and professionals who turn real projects into results
        </motion.p>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12 text-sm sm:text-base"
        >
          {["Small", "High-Quality", "Active", "Skilled", "Results-Driven"].map(
            (tag, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-4 py-1.5 rounded-full glass text-purple-300 font-medium"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={onCTAClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 sm:px-10 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden group"
        >
          <span className="relative z-10">Join the Community</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
          />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-400 text-sm">Scroll to explore</p>
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
