import React from "react";
import "./Content.css";

const IntroParagraph = () => {
  return (
    <section className="intro-paragraph">
      <div className="intro-content">
        <h1>
          Hello, my name is <span className="highlight">Cade Wied</span>
        </h1>
        <h2>
          I'm a <span className="highlight">Full Stack Developer</span>
        </h2>
        <p>
          In the 82nd Airborne Division. I specialize in building dynamic and
          robust web applications using a variety of languages and frameworks.
          My mission is to deliver high-quality, scalable solutions that meet
          the needs of modern users.
        </p>
      </div>
    </section>
  );
};

export default IntroParagraph;
