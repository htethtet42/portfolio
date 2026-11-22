
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  MessageCircle,
  MapPin,
  Code2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending your message.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Htet Htet",
          to_email: import.meta.env.VITE_APP_TO_EMAIL,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully! Thank you for reaching out.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-12 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - CONTACT FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-tertiary p-7 sm:p-10 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
      >
        {/* Decorative Background */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl" />

        <div className="relative z-10">
          {/* Heading */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-emerald-400" />

            <p className="text-sm uppercase tracking-[3px] text-emerald-400">
              Get in touch
            </p>
          </div>

          <h2 className={`${styles.sectionHeadText} mt-4`}>
            Contact<span className="text-emerald-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-secondary text-[16px] leading-7">
            Have a project idea, internship opportunity, or just want
            to connect? I'd be happy to hear from you. Let's start
            a conversation and explore how we can work together.
          </p>

          {/* Contact Highlight */}
          <div className="mt-8 flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-emerald-400/5 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
              <MessageCircle className="h-6 w-6 text-emerald-400" />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Let's talk about opportunities
              </h3>

              <p className="mt-1 text-sm text-secondary">
                Projects, collaboration, and internships.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">

            {/* Name */}
            <label className="flex flex-col gap-3">
              <span className="text-white font-medium">
                Your Name
              </span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                maxLength={100}
                className="w-full rounded-xl border border-emerald-500/10 bg-[#0b1d18] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col gap-3">
              <span className="text-white font-medium">
                Your Email
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                maxLength={254}
                className="w-full rounded-xl border border-emerald-500/10 bg-[#0b1d18] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
              />
            </label>

            {/* Message */}
            <label className="flex flex-col gap-3">
              <span className="text-white font-medium">
                Your Message
              </span>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                maxLength={3000}
                className="w-full resize-y rounded-xl border border-emerald-500/10 bg-[#0b1d18] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
              />
            </label>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0" />
                )}

                <span>{status.message}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-fit items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-[#02140E] shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Sending Message..." : "Send Message"}

              <Send
                className={`h-5 w-5 transition-transform duration-300 ${
                  loading ? "" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </form>
        </div>
      </motion.div>

      {/* RIGHT SIDE - 3D EARTH */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative flex min-h-[450px] flex-col items-center justify-center xl:min-h-[650px]"
      >
        {/* Earth Canvas */}
        <div className="absolute inset-0">
          <EarthCanvas />
        </div>

        {/* Floating Information */}
        <motion.div
          variants={fadeIn("up", "spring", 0.8, 0.75)}
          className="absolute bottom-5 left-0 right-0 mx-auto w-fit rounded-2xl border border-emerald-500/20 bg-[#071711]/80 px-6 py-4 text-center shadow-[0_0_30px_rgba(16,185,129,0.1)] backdrop-blur-md"
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-emerald-400" />

            <span className="text-sm text-white">
              Mandalay, Myanmar
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <Code2 className="h-4 w-4 text-emerald-400" />

            <span className="text-xs text-secondary">
              Always learning. Always building.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
