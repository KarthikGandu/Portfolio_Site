import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karthik G </span>
            from <span className="purple"> Dallas, USA.</span>
            <br />I am a Graduate Student pursuing Master's in Computer Science University Of North Texas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Karate
            </li>
            <li className="about-activity">
              <ImPointRight /> Index Options Trading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Adventourous Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Karthik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
