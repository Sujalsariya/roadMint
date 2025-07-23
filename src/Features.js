import React from 'react';
import {
  Terminal,
  DollarSign,
  BarChart3,
  Skull,
  Download,
  Brain,
  Layers,
  Cloud
} from 'lucide-react';
import './Features.css'; // Import the CSS

const Features = () => {
  const features = [
    {
      icon: Terminal,
      title: "No Sign-Up Needed",
      description: "Jump straight in—no account required.",
    },
    {
      icon: DollarSign,
      title: "Forever Free",
      description: "Completely free to use. No fees. No paywalls. Ever.",
    },
    {
      icon: BarChart3,
      title: "Personalized Daily Steps",
      description: "Your topic is broken down into clear, focused steps for each day.",
    },
    {
      icon: Skull,
      title: "Progress Tracking",
      description: "Mark topics as 'learned' and watch your progress grow over time.",
    },
    {
      icon: Download,
      title: "Export to CSV",
      description: "Download your entire roadmap and progress as a CSV file anytime.",
    },
    {
      icon: Brain,
      title: "AI-Powered Breakdown",
      description: "Smart topic segmentation—crafted with the help of AI.",
    },
    {
      icon: Layers,
      title: "Clean, Minimal UI",
      description: "No clutter. No distractions. Just focused learning.",
    },
    {
      icon: Cloud,
      title: "Offline Access",
      description: "Use your roadmap anytime—even without the internet.",
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon className="icon-svg" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
