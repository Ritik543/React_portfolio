import { React, useEffect } from "react";
import "../components/Project.css";
import spotify from "../assets/spotify.png";
import Recipe from "../assets/recipe.png";
import GYM from "../assets/image.png";
import wishes from "../assets/wishes.png";
import dictionary from "../assets/dictionary.png";
import weatherApp from "../assets/Weather_App.png";
// import gotIt from "../assets/Gotit_Online_Recruiter.png";
import Healthdashboard from "../assets/Healthdashboard.png";
import Ritikai from "../assets/Ritikai.png";
import firecart from "../assets/firecart.png";
import wanderlust from "../assets/wanderlust.png";
// import trendify from "../assets/Trendify.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import chatapp from "../assets/chatapp.png";

export default function Project() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <div id="projects" data-aos="fade-top">
      <h3 className="about-heading">PROJECTS</h3>
      <div className="project_slide_show">
        <div className="project">
          <img src={chatapp} alt="" />
          <NavLink target="_blank" to="https://ritikschat.netlify.app/">
            {" "}
            <h4>Ritikchat: Professional Social Media Site for chatting</h4>
          </NavLink>
          <p>
          Ritik's Chat App is a WhatsApp-like messaging platform built with the MERN stack and WebSocket. It supports profile picture uploads, group chats, and real-time online status updates, allowing users to chat privately or in groups, share media, and see who’s online instantly.{" "}
            <span>ReactJS</span>, <span>CSS</span>, <span>Express</span>,
            <span>Cloudinary</span>, <span>Multer</span>, <span>JWT</span> &{" "}
            <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={wanderlust} alt="" />
          <NavLink target="_blank" to="https://elevate-ij2p.onrender.com/login">
            {" "}
            <h4>Elevate: Room Booking Site</h4>
          </NavLink>
          <p>
            {" "}
            A fully responsive room booking site where you can add locations,
            edit them, review them and can delete them. It also include seperate
            User Section where you can change password and can edit your profile
            using <span>Express</span>, <span>EJS</span>, <span>CSS</span>,
            <span>Cloudinary</span>, <span>Multer</span>, <span>MapBox</span> &{" "}
            <span>MongoDB</span>
          </p>
        </div>

        <div className="project">
          <img src={firecart} alt="" />
          <NavLink target="_blank" to="https://firekart.netlify.app/">
            {" "}
            <h4>Firecart: E-Commerce site</h4>
          </NavLink>
          <p>
            An e-commerce-site with full functionalities like login/signup,
            filtering-sorting, cart, wishlist, comparison section using{" "}
            <span>React JS</span>, <span>CSS</span>, <span>Tailwind css</span>,{" "}
            <span>Firebase</span>
          </p>
        </div>

        <div className="project">
          <img src={Ritikai} alt="" />
          <NavLink target="_blank" to="https://ritikai.netlify.app//">
            {" "}
            <h4>RitikAI : AI Powered Web Application</h4>
          </NavLink>
          <p>
          RitikAI is an AI-powered project inspired by Gemini AI, developed using ReactJS and CSS. This project leverages AI to deliver dynamic, responsive features that enhance user interaction and engagement. With intelligent data handling and real-time adaptability, RitikAI showcases your expertise in incorporating advanced AI into web applications, creating a seamless and engaging user experience.
            <span>ReactJS</span>, <span>CSS</span>,{" "}
            <span>Gemini AI Api</span>,
          </p>
        </div>

        <div className="project">
          <img src={Healthdashboard} alt="" />
          <NavLink
            target="_blank"
            to="https://healthdashboard3.netlify.app/"
          >
            {" "}
            <h4>Health Dashboard</h4>
          </NavLink>
          <p>
          
          Health Dashboard is a data-driven platform for tracking and visualizing health metrics like body temperature, blood pressure, and heart rate. It includes features for sorting, searching, and filtering data, with interactive charts for clear visualization.
            <span>ReactJS</span> &{" "}
            <span>LocalStorage</span>
            <span>Chartjs</span>
          </p>
        </div>

        

        <div className="project">
          <img src={weatherApp} alt="" />
          <NavLink
            target="_blank"
            to="https://ritik-weather-project.netlify.app/"
          >
            {" "}
            <h4>Weather App</h4>
          </NavLink>
          <p>
            It shows the weather of your location after getting the access of
            location & also can tell the weather info of any city around the
            world using <span>React</span> & <span>Fetch API</span>
          </p>
        </div>

        <div className="project">
          <img src={spotify} alt="" />
          <NavLink
            target="_blank"
            to="https://ritik4-14b775.netlify.app/"
          >
            <h4>Spotify Clone</h4>
          </NavLink>
          <p>
          Spotify Clone is a web project built using HTML, CSS, and JavaScript. It replicates Spotify's interface and basic functionality, allowing users to browse, play, and control music with a sleek, responsive design. This project showcases skills in frontend development and UI/UX design.
             <span>HTML</span>,<span>CSS</span> &{" "}
            <span>JS</span>
          </p>
        </div>

        <div className="project">
          <img src={Recipe} alt="" />
          <NavLink
            target="_blank"
            to="https://ritik-recipe-62.netlify.app/"
          >
            {" "}
            <h4>Recipe Finder</h4>
          </NavLink>
          <p>
          Recipe Finder is a web app that provides recipes for various food items. Users can search for any dish and get detailed recipes, including ingredients and cooking instructions. This project highlights skills in organizing and presenting culinary data for easy access.{" "}
            <span>React</span> , <span>CSS</span> & <span>JS</span> <span>Axios</span>
          </p>
        </div>
        <div className="project">
          <img src={dictionary} alt="" />
          <NavLink
            target="_blank"
            to="https://ritik-dictionary.netlify.app/"
          >
            {" "}
            <h4>Free dictionary</h4>
          </NavLink>
          <p>
          Dictionary App is built using React, CSS, and Axios. It allows users to search for word meanings and hear pronunciations. The app fetches data from an external API via Axios, offering an intuitive interface for easy access to definitions and pronunciation.{" "}
            <span>React</span> , <span>CSS</span> & <span>JS</span> <span>Axios</span>
          </p>
        </div>
        <div className="project">
          <img src={GYM} alt="" />
          <NavLink
            target="_blank"
            to="https://gymdashboard.netlify.app/"
          >
            {" "}
            <h4>Fit GYM</h4>
          </NavLink>
          <p>
          FitGym is a gym website built with React, Tailwind CSS, and Chart.js. It features a dashboard for tracking fitness progress and visualizing data through interactive charts..{" "}
            <span>React</span> , <span>CSS</span> & <span>Tailwind css</span> <span>chart js</span>
          </p>
        </div>
        <div className="project">
          <img src={wishes} alt="diwali wishes" />
          <NavLink
            target="_blank"
            to="https://diwaliwishes1.netlify.app/"
          >
            {" "}
            <h4>Diwali Wishes using three js</h4>
          </NavLink>
          <p>
          Diwali Wishes Site is a festive web app built with HTML, CSS, JavaScript, and Three.js. It allows users to send and view Diwali greetings with interactive 3D effects, creating a vibrant and engaging experience for the holiday season..{" "}
            <span>HTML</span> , <span>CSS</span> <span>JS</span> & <span> Three JS</span> 
          </p>
        </div>
      </div>
    </div>
  );
}
