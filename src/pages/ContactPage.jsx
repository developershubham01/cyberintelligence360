import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPaperPlane,
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaClock
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // ✅ change this email to your real email
  const receiverEmail = "developershubham2005@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Working Submit (Open Mail Client)
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello CyberIntelligence360 Team,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Thanks,\n${formData.name}`
    );

    window.location.href = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Social Links (Real Working)
  const socialLinks = [
    {
      icon: <FaTwitter />,
      label: "Twitter",
      link: "https://x.com/SharmaShub17390?t=z37rSDFHOw4__yRDmESlMQ&s=09",
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/developershubham01",
      color: "hover:bg-gray-500/20 hover:text-white"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/shubham-sharma395",
      color: "hover:bg-blue-600/20 hover:text-blue-500"
    },
    {
      icon: <FaDiscord />,
      label: "Discord",
      link: "https://discord.com/",
      color: "hover:bg-purple-500/20 hover:text-purple-400"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: [receiverEmail, ""],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaDiscord />,
      title: "Discord",
      details: ["Join our community server", "Live chat support"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      details: ["Report issues", "Contribute to projects"],
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: <FaClock />,
      title: "Response Time",
      details: ["24-48 hours for email", "Instant on Discord"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const faqItems = [
    {
      question: "How can I contribute to the project?",
      answer:
        "You can contribute by submitting tools, writing documentation, reporting issues, or joining our development team on GitHub."
    },
    {
      question: "Are the tools free to use?",
      answer:
        "Yes, all tools listed are either open-source or offer free tiers. We never list paid-only tools without free alternatives."
    },
    {
      question: "How often are new tools added?",
      answer:
        "We update our database weekly with new tools and updates. You can subscribe to our newsletter for updates."
    },
    {
      question: "Can I request a specific tool?",
      answer:
        "Absolutely! Use our contact form to request tools or features. We prioritize community requests."
    }
  ];

  return (
    <div className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions, suggestions, or want to contribute? We'd love to hear from you.
            Our team is always ready to help and collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="tool-request">Tool Request</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="contribution">Contribution</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-br ${info.color}/20 to-transparent border border-slate-700/40 rounded-2xl p-6`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{info.title}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-300">
                      {info.title === "Email" ? (
                        <a
                          href={`mailto:${detail}`}
                          className="hover:text-blue-400 transition-all"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>

              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 py-3 bg-slate-800/50 rounded-xl flex flex-col items-center justify-center text-slate-400 transition-all ${social.color}`}
                  >
                    <div className="text-xl mb-2">{social.icon}</div>
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-sm font-bold">Q</span>
                  </div>
                  {faq.question}
                </h4>
                <p className="text-slate-300 pl-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 text-center"
        >
          <FaDiscord className="text-5xl text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Connect with thousands of security enthusiasts, share knowledge,
            get help, and collaborate on projects in real-time.
          </p>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all"
          >
            Join Discord Server
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
