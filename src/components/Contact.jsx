import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email syntax.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto dismiss success toast after 4s
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-primary-glow blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-glow blur-3xl opacity-50 -z-10" />

      <div className="w-[92%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black font-display text-foreground tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-text-muted"
          >
            Have a project in mind, need software infrastructure, or just want to connect?
          </motion.p>
        </div>

        {/* Form and Info Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between glassmorphism p-8 rounded-3xl border-card-border"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-foreground text-left">
                Contact Information
              </h3>
              <p className="text-sm text-text-muted text-left leading-relaxed">
                Feel free to reach out via the form, or ping me directly across my socials. I will get back to you within 24 hours.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 pt-4">
                <a
                  href="mailto:santhoshanaik02@gmail.com"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">Email</p>
                    <p className="text-foreground">santhoshanaik02@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/santhosha-narayana-naik-29317930b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Linkedin size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/in/santhosha-narayana-naik-29317930b</p>
                  </div>
                </a>

                <a
                  href="https://github.com/SanthoshaNaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Github size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">GitHub</p>
                    <p className="text-foreground">github.com/SanthoshaNaik</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-text-muted group">
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">Location</p>
                    <p className="text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Grid Art (Bottom) */}
            <div className="hidden lg:block border-t border-card-border pt-8 mt-8">
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5 font-mono text-[9px] text-gray-500 space-y-1">
                <p><span className="text-purple-400">import</span> socket, sys</p>
                <p><span className="text-purple-400">print</span>(<span className="text-emerald-400">"Connecting to Santhosha Narayana Naik..."</span>)</p>
                <p><span className="text-yellow-400">ping</span> -c 1 local.server.in</p>
                <p className="text-green-400">» STATUS: 200 OK [Latency: 12ms]</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glassmorphism p-8 rounded-3xl border-card-border relative"
          >
            {/* Success overlay state */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/95 z-20 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-green-500/10 text-green-500 border border-green-500/30 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/5"
                  >
                    <CheckCircle2 size={36} />
                  </motion.div>
                  <h4 className="text-xl font-bold font-display text-foreground mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-text-muted max-w-sm">
                    Thank you for reaching out. Santhosh will get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-card-base border font-sans text-sm text-foreground focus:outline-none transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-card-border focus:border-primary/50'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-[10px] font-mono text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-card-base border font-sans text-sm text-foreground focus:outline-none transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-card-border focus:border-primary/50'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] font-mono text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider">
                  Subject
                  </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-card-base border font-sans text-sm text-foreground focus:outline-none transition-all duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-card-border focus:border-primary/50'
                  }`}
                  placeholder="Inquiry / Project Collaboration"
                />
                {errors.subject && (
                  <p className="text-[10px] font-mono text-red-500 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-card-base border font-sans text-sm text-foreground focus:outline-none transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-card-border focus:border-primary/50'
                  }`}
                  placeholder="Type your message here..."
                />
                {errors.message && (
                  <p className="text-[10px] font-mono text-red-500 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
