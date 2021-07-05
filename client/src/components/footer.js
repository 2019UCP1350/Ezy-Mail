import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/footer.css";
import mainlogo from "../images/Favicon-05.svg"

const Footer = () => {
  useEffect(() => {
    const colors = ["#802bb1", "#d69d66"];
    const createSquare = () => {
      const parent = document.querySelector("#footer");
      const square = document.createElement("span");
      square.classList.add("footerspan");
      var size = Math.random() * 50;
      square.style.height = 20 + size + "px";
      square.style.width = 20 + size + "px";
      square.style.borderRadius = 50 + "%";
      square.style.bottom = Math.random() * window.innerHeight + "px";
      square.style.left = Math.random() * window.innerWidth + "px";
      square.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      if (parent) {
        parent.appendChild(square);
      }
      setTimeout(() => {
        square.remove();
      }, 5000);
    };
    setInterval(createSquare, 300);
  }, []);
  let history = useHistory();
  function HandleSubmit() {
    history.push(`/login`);
  }
  return (
    <div className="footcontainer">
      <div id="footer"></div>
      <div className="footcircle circle1"></div>
      <div className="footcircle circle2">
        <div className="circletext">
          <span>
            Welcome to <br></br>automated<br></br> mail sender<br></br>EZYMAIL
          </span>
        </div>{" "}
      </div>
      <div className="footcircle circle3"></div>
      <div className="sideinfo">
        <div className="company">
          <img
            src={mainlogo}
            style={{ height: "100px", width: "100px", display: "inline" }}
            alt="logo"
          ></img>
          <h1
            style={{ fontWeight: "900", fontSize: "40px", display: "inline" }}
          >
            &nbsp;&nbsp;EzyMail
          </h1>
        </div>
        <h3 style={{ marginTop: "10%" }}>
          We automate the mails as per your choice
        </h3>
        <h4>Let us know the periodicty</h4>
        <h2 style={{ marginTop: "9%", textDecoration: "underline" }}>
          Key&nbsp;Features :-
        </h2>
        <h3 >
          &#9679;&nbsp;Email&nbsp;History
        </h3>
        <h3 >
          &#9679;&nbsp;Customizable&nbsp;Emails
        </h3>
        <h3 >&#9679;&nbsp;Email&nbsp;Automation</h3>
        <div className="login" onClick={HandleSubmit}>
          Login
        </div>
        Connect with us
        <a
          href="https://github.com/2019UCP1350/Flipper"
          style={{ fontSize: 40, textDecoration: "none", color: "white" }}
        >
          {" "}
          <i className="fab fa-github" style={{ paddingLeft: "5%" }}></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
