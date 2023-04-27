import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.jpeg";
import chatify from "../../Assets/Projects/chatify.jpeg";
import suicide from "../../Assets/Projects/suicide.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.jpeg";
import stock from "../../Assets/Projects/stock.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Copy-Trading-Bot"
              description="This project is a copy trading bot developed for the Indian stock market trading platform Zerodha. It allows users to automatically replicate the trades of a chosen master account onto their own trading accounts. The bot is developed in Python and uses Zerodha's API to access and execute trades."
              ghLink="https://github.com/KarthikGandu/Copy_Trading_Bot_Zerodha"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Stock Market Prediction"
              description="This project is a stock market prediction model developed in Python using machine learning techniques. The model utilizes historical stock market data to make predictions about future market trends. It includes features such as data visualization, data preprocessing, model training, and testing. The goal of this project is to provide a reliable prediction tool to assist investors in making informed decisions about their investments."
              ghLink="https://github.com/KarthikGandu/Stock_Market_Prediction"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stock Market Dividend Calculator"
              description="This project is a dividend calculator developed in Python for the Indian stock market. It allows users to calculate the expected dividend amount for a given stock based on the number of shares they own. The calculator takes into account the latest dividend declared by the company and updates the results accordingly."
              ghLink="https://github.com/KarthikGandu/Stock_Market_Dividend_Calculator"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Flight Booking App"
              description="This project is a flight booking web application developed using the Django framework in Python. It includes features such as user registration, flight search and booking, payment processing, and user profile management. The goal of this project is to provide a convenient and user-friendly platform for users to search and book flights."
              ghLink="https://github.com/KarthikGandu/Flight_Booking_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bank note Authentication App "
              description="This project is a web application developed in Python using the Flask framework to authenticate banknotes. It uses machine learning algorithms to detect whether a banknote is genuine or counterfeit based on a set of image features. The application includes a user interface for uploading an image of a banknote and receiving the authentication result. The aim of this project is to provide a reliable and efficient method for banks and other financial institutions to authenticate banknotes."
              ghLink="https://github.com/KarthikGandu/Bank_Note_Authentication_App"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DVC, Containerized App"
              description="This project is a demonstration of using Data Version Control (DVC) with TensorFlow for a machine learning use case. It includes a sample TensorFlow model that is trained on the MNIST dataset and versioned using DVC. The project showcases how DVC can be used to track and manage changes to the model and dataset, making it easier to collaborate with others and reproduce results. The goal of this project is to show the benefits of using DVC for machine learning projects."
              ghLink="https://github.com/KarthikGandu/DVC_TENSORFLOW_USECASE"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Interactive Stock Analysis Dashboard"
              description="This project is an interactive stock analysis dashboard developed using Python and the Dash framework. It allows users to explore and analyze stock data using a variety of visualizations, including candlestick charts, moving averages, and technical indicators. The dashboard also includes features such as stock search, date range selection, and custom chart settings. The goal of this project is to provide a powerful and user-friendly tool for investors to analyze and make informed decisions about their investments."
              ghLink="https://github.com/KarthikGandu/Interactive-Stock-Analysis-Dashboard"
  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
