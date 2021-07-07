import React, { useEffect, useContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer.js";
import { useHistory } from "react-router-dom";
import gsap from "gsap";
import "../css/App.css";
import circle from "../images/circle-small.png";
import circle2 from "../images/circle-large4.png";
import mail from "../images/mail.svg";
import emailhistory1 from "../images/email-history1.svg";
import emailhistory2 from "../images/email-history2.svg";
import autoleft from "../images/autoleft.svg";
import autoright from "../images/autoright.svg";
import leftimage from "../images/leftimage3.jpg";
import { Context as AuthContext } from "../context/AuthContext";
const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const {
    tryLocalLogin,
    state: { token },
  } = useContext(AuthContext);
  let history = useHistory();
  useEffect(() => {
    const auth_checker = async () => {
      await tryLocalLogin();
      if (token) {
        history.push("/home");
      }
      gsap.to(".layer-1", { y: "-100vh", delay: 0.5 });
      gsap.to(".layer-2", { y: "-100vh", delay: 0.7 });
      gsap.to(".layer-3", { y: "-100vh", delay: 0.9 });
      gsap.to(".overlay", { y: "-100vh", delay: 1.5 });
      gsap.fromTo(
        ".circle-small",
        { x: "-30rem", opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 1.3 }
      );
      gsap.fromTo(
        ".circle-large",
        { x: "30rem", opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 1.6 }
      );
      gsap.fromTo(
        ".container",
        { x: "30rem", opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 2.0 }
      );
      gsap.fromTo(
        ".mail-wrapper",
        { x: "30rem", opacity: 0 },
        { x: 0, opacity: 1, ease: "back.out(1.7)", delay: 2.8 }
      );
      gsap.from(".emailhistory1", {
        x: "-30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".emailhistory1",
        },
      });
      gsap.from(".h1div", {
        x: "30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".h1div",
        },
      });
      gsap.from(".h1div2", {
        x: "-30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".h1div2",
          start: "top top+=30",
        },
      });
      gsap.from(".emailhistory2", {
        x: "0rem",
        y: "30rem",
        duration: 1,
        scrollTrigger: {
          trigger: ".h1div2",
          start: "top top+=30",
        },
      });
      gsap.from(".pink", {
        x: "110vh",
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: ".tpoint",
          start: "top top+=100",
        },
      });
      gsap.from(".leftimage2", {
        x: "-60rem",
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: ".tpoint",
          start: "top top+=100",
        },
      });
      gsap.from(".leftimage", {
        x: "-60rem",
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".tpoint",
          start: "top top+=100",
        },
      });
      gsap.from(".texton", {
        y: "100rem",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".tpoint",
          start: "top top+=100",
        },
      });
      gsap.from(".autoleft", {
        x: "-30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".autoleft",
          start: "top top+=100",
        },
      });
      gsap.from(".titleheading", {
        x: "30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".titleheading",
          start: "top top+=100",
        },
      });
      gsap.from(".titledis", {
        x: "-30rem",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".titledis",
          start: "top top+=100",
        },
      });
      gsap.from(".autoright", {
        x: "0rem",
        y: "30rem",
        duration: 1,
        scrollTrigger: {
          trigger: ".titledis",
          start: "top top+=100",
        },
      });
      gsap.from(".footcontainer", {
        x: "130rem",
        duration: 1,
        scrollTrigger: {
          trigger: ".footcontainer",
          start: "top top+=50",
        },
      });
    };
    auth_checker();
  },);

  function HandleSubmit() {
    history.push(`/login`);
  }

  return (
    <div className="App">
      <section className="hero">
        <div className="circle circle-small">
          <img src={circle} alt=""></img>
        </div>
        <div className="circle circle-large">
          <img src={circle2} alt=""></img>
        </div>
        <div className="container">
          <div className="content">
            <h1 style={{ color: "white" }}>
              EZY
              <span style={{ color: "#fa949d" }}>MAIL</span>
            </h1>
            <br></br>
            <span style={{ marginBottom: "10px" }}>
              <h5 style={{ color: "white", fontSize: "20px" }}>
                Market your business with us
              </h5>
            </span>
            <br></br>
            <p style={{ color: "white", fontSize: "20px" }}>
              We help you expand your business
              <br></br>through email.
            </p>
          </div>
          <div className="cta" onClick={HandleSubmit}>
            Login
          </div>
        </div>
        <div className="overlay">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
        </div>
        <div className="mail-wrapper">
          <img src={mail} className="mail" alt="mail"></img>
        </div>
      </section>
      <section className="hero2">
        <div style={{ display: "flex" }}>
          <div className="emailimage1">
            <img
              src={emailhistory1}
              className="emailhistory1"
              alt="emailhistory"
            ></img>
          </div>
          <div className="h1div">
            <p>Email&nbsp;&nbsp;&nbsp;History</p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "5%" }}>
          <div className="h1div2" style={{ marginLeft: "5%" }}>
            <h4 style={{ color: "white", fontSize: "30px" }}>
              To market your business through emails you should know to whom you
              are sending and when you are sending these mails. And guess what!!
              We do that. We keep track of the email history
            </h4>
          </div>
          <div style={{ marginRight: "5%" }} className="emailhistory2">
            <img
              src={emailhistory2}
              className="emailhistory2"
              alt="emailhistory2"
            ></img>
          </div>
        </div>
      </section>
      <section className="hero3">
        <div style={{ display: "flex" }} className="tpoint">
          <img src={leftimage} className="leftimage" alt="leftimage"></img>
          <div className="leftimage2"></div>
          <div className="pink"></div>
          <div className="texton">
            <h1>Customizable Emails</h1>
            <p>
              Don't let your business go down because of old style<br></br>{" "}
              boring Emails.Make your emails attractive and catchy
              <br></br> using our highly customizable email text editor which
              <br></br> lets you explore amazing styles.
            </p>
          </div>
        </div>
      </section>
      <section className="hero4">
        <div style={{ display: "flex" }}>
          <div className="autoimage">
            <img src={autoleft} className="autoleft" alt="autoleft"></img>
          </div>
          <div className="titleheading">
            <p>Email&nbsp;&nbsp;&nbsp;Automation</p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "5%" }}>
          <div className="titledis" style={{ marginLeft: "5%" }}>
            <h5 style={{ color: "white", fontSize: "30px" }}>
              Worried about sending timely emails?? No need to worry, we'll do
              the job for you. We provide you with the option of sending
              <br></br>
              &#9679;&nbsp;Daily
              <br></br>
              &#9679;&nbsp;Weekly<br></br>
              &#9679;&nbsp;Monthly<br></br>
              &#9679;&nbsp;Yearly emails.<br></br>
              And guess what!! you can send automated emails to not just{" "}
              <br></br>
              one user but as many people as you like.
            </h5>
          </div>
          <div style={{ marginRight: "5%" }} className="autoright">
            <img src={autoright} className="autorights" alt="autorights"></img>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
