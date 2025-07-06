import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Footer = () => {
  const socialLinks = [
    {
      name: "FaceBook",
      url: "https://www.facebook.com/satishtimalsina.dinesh/",
      icon: "🔗"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/satish-timalsina-01505a271/",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://x.com/satishalways1",
      icon: "🐦"
    },
    {
      name: "Email",
      url: "mailto:timalsinasatish430@gmail.com",
      icon: "✉️"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <footer className=" text-white py-10 px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Satish Timalsina
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tertiary hover:bg-primary transition-colors duration-300 
                           p-3 rounded-lg shadow-md shadow-primary/20 
                           flex items-center gap-2 text-sm font-medium"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-secondary text-sm"
            >
              © {new Date().getFullYear()} Satish Timalsina. All rights reserved.
            </motion.p>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6"
            >
              <a
                href="#privacy"
                className="text-secondary hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-secondary hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-tertiary hover:bg-primary 
                   transition-colors duration-300 p-3 rounded-full 
                   shadow-lg shadow-primary/20 text-white font-bold"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;