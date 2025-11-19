import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { skills } from "@/data/skills";
import { useInView } from "@/hooks/useInView";
import { CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mainSkill: "",
    experience: "",
    goals: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (value: string) => {
    setFormData((prev) => ({ ...prev, mainSkill: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Full name is required");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Valid email is required");
      return false;
    }
    if (!formData.mainSkill) {
      setErrorMessage("Please select a main skill");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);

    try {
      // Using FormSubmit.co for form submission
      const formElement = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(formElement);

      // Note: Replace with your actual email address for FormSubmit.co
      // https://formsubmit.co/your-email@example.com
      const response = await fetch("https://formsubmit.co/ajax/contact@digitaloperators.com", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          mainSkill: "",
          experience: "",
          goals: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

  const itemVariants = {
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
      className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              <span className="gradient-text">Ready to Build Something?</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Join us and let's create something incredible together
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-dark rounded-xl p-8 sm:p-10 space-y-6"
          >
            {/* Success message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-300 font-medium">
                  Thanks for joining! We'll be in touch soon.
                </p>
              </motion.div>
            )}

            {/* Error message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-300 font-medium">{errorMessage}</p>
              </motion.div>
            )}

            {/* Full Name */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50"
                required
              />
            </motion.div>

            {/* Main Skill */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Main Skill *
              </label>
              <Select value={formData.mainSkill} onValueChange={handleSkillChange}>
                <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="Select your main skill" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700">
                  {skills.map((skill) => (
                    <SelectItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Experience
              </label>
              <Textarea
                name="experience"
                placeholder="Tell us about your experience and background..."
                value={formData.experience}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50 resize-none"
                rows={4}
              />
            </motion.div>

            {/* Goals */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                What do you want to build/achieve?
              </label>
              <Textarea
                name="goals"
                placeholder="Share your vision and goals..."
                value={formData.goals}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50 resize-none"
                rows={4}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Join the Community"
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
