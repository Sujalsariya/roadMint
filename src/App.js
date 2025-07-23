import React from "react";
import FaqContent from "./FaqContent";
import Footer from "./Footer";
import RainBackground from "./RainBackground";
import logo from './assets/logo.webp';
import Features from "./Features"


const topics = [
  "Web Development",
  "Data Structures and Algorithms",
  "Machine Learning",
  "Artificial Intelligence",
  "Python Programming",
  "C++ Programming",
  "System Design",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Mobile App Development",
  "Blockchain Development",
  "Game Development",
  "Computer Architecture",
  "Linux and Shell Scripting",
  "Frontend Development (HTML, CSS, JS, React)",
  "Backend Development (Node.js, Django, Spring Boot)",
  "Software Engineering Principles",
  "Git and Version Control",
  "Data Science",
  "Natural Language Processing (NLP)",
  "Quantum Computing (Beginner Level)"
];

const main_Card_Quote=[{
    type: "quote",
    content: (
      <>
        <em>If you can see it in your mind, you can hold it in your hand.</em>
        <br />
        <span style={{ fontSize: "1rem", opacity: 0.8 }}>- Steve Harvey</span>
      </>
    )
  }]
const mainCards = [
  
  {
    type: "tip",
    head : "Daily Tip ",
    content: "Take regular breaks using the Pomodoro technique."
  },
  {
    type: "stat",
     head : "Daily stats ",
    content: "35% of developers keep stickers on their laptops to hide scratches."
  },
  {
    type: "trivia",
     head : "Daily Trivia ",
    content: (
      <>
        This mobile OS held the largest market share in <b>2012</b>.
        <br />
        <div style={{ marginTop: 12 }}>
          <button className="trivia-btn">Android</button>
          <button className="trivia-btn">BlackBerry</button>
          <button className="trivia-btn">Symbian</button>
          <button className="trivia-btn">iOS</button>
        </div>
      </>
    )
  }
];

function App() {
  return (
    <>
      <div className="container">
        <RainBackground dropCount={130} />
        <header>
          <div className="logo" >
            <span className="logo-dot">
              <img src={logo} alt="Logo" style={{ width: "28px", height: "28px" }} />
            </span>

            <span className="logo-text">Road</span>
            <span style={{color:"#60ff1c"}}>m</span>
            <span style={{color:"#ff708f"}}>i</span>
            <span style={{color:"#ffd86c"}}>n</span>
            <span style={{color:"#e97cff"}}>t</span>
          </div>
          <div className="user-desk">Your Desk</div>
        </header>

        <main>

          <h1>Roadmap</h1>
          <p className="subtitle">
            Make sure your topic is clear, specific, and well-defined — the more
            precise it is, the better the roadmap you'll get!
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Topic Name..." />
            <button>
              <span role="img" aria-label="search">
                🔍
              </span>
            </button>
          </div>

          <div className="topics">
            {topics.map((text, idx) => (
              <div className="topic" key={idx}>
                {text}
              </div>
            ))}
          </div>
         
            {main_Card_Quote.map((card,i) =>{
              return  <div key = {i} className="main-card-quote">
                
                {card.content}
          </div>
            })}

         <div className="main-cards">
  {mainCards.map((card, i) => {
    
    return (
      <div key={i} className={`main-card main-card-${card.type}`}>
        {card.head}
       <br/>
       <br/>
        {card.content}
      </div>
    );
  })}
</div>

        </main>
        <Features />
        <FaqContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
