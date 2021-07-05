import React, { useEffect, useContext } from "react";
import { init } from "vanilla-tilt";
import "../css/Email.css";
import { Context as AuthContext } from "../context/AuthContext"
import Signoutbtn from "../components/Signoutbtn"

function EmailPage() {
  const { tryLocalLogin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalLogin();
    init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);


  return (
    <div className="glass">
      <Signoutbtn></Signoutbtn>
      <div className="emailcontainer">
        <div className="card">
          <h2>01</h2>
          <div className="emailcontent">
            <h3>Customize Email</h3>
            <p>Experience the best features for customization of emails.</p>
            <a href="/compose">Click here to create email</a>
          </div>
        </div>
      </div>
      <div className="emailcontainer">
        <div className="card">
          <h2>02</h2>
          <div className="emailcontent">
            <h3>Email History</h3>
            <p>See what you had sent to your users.</p>
            <a href="/history">Read more</a>
          </div>
        </div>
      </div>
      <div className="emailcontainer">
        <div className="card">
          <h2>03</h2>
          <div className="emailcontent">
            <h3>About Us</h3>
            <p>Click below to know about us.</p>
            <a href="/aboutus">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPage;
