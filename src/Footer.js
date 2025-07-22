import React from "react";
import { motion } from "framer-motion";
import logo from './assets/logo.webp';

const Footer = () => (
  <motion.footer
    className="rm-footer"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div className="rm-footer-content">
      <span className="rm-footer-logo">
        <span className="logo-dot">
            <img src={logo} alt="Logo" style={{ width: "28px", height: "28px" }} />
          </span>
        <span>Road</span>
        <span style={{ color: "#7aff97" }}>mint</span>
      </span>
      <span>All rights reserved © 2025 Roadmint</span>
      <span className="rm-footer-desc">
        Get a personalized AI-powered roadmap in seconds. No account required.
        Free forever.
      </span>
    </div>
  </motion.footer>
);

export default Footer;