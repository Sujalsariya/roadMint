import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  { q: "Is this app really free?", a: "Yes! Roadmint is 100% free forever. No paywalls, no hidden fees." },
  { q: "Do I need to sign up to use this?", a: "No sign-up or account required. Start using instantly." },
  { q: "Can I customize the learning pace or days?", a: "Yes, you can adjust your pace and custom daily steps." },
  { q: "Do I need to understand JSON?", a: "No, the interface is user-friendly—no technical knowledge required." },
  { q: "Can I track my progress?", a: "Absolutely! Progress tracking is built-in." },
  { q: "Will I lose my data if I refresh?", a: "No. Your data is stored locally and remains safe after refresh." },
];

const FaqContent = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="rm-faq-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <p className="rm-faq-desc">
        Answers to the most common questions about the Roadmint app, learning pace, and features.
      </p>
      <div className="rm-faq-list">
        {faqData.map((item, idx) => (
          <motion.div className="rm-faq-card" key={idx} layout>
            <button
              className="rm-faq-question"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-ans-${idx}`}
            >
              <span>{item.q}</span>
              {openIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  id={`faq-ans-${idx}`}
                  className="rm-faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.36 }}
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqContent;
