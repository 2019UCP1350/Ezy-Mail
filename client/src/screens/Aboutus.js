import React from 'react'
import { ReactComponent as Team } from ".././images/team.svg"
import Signoutbtn from "../components/Signoutbtn"
import "./../css/team.css"
export default function Aboutus() {
    return (
        <div className="teammain">
            <Signoutbtn />
            <div className="teamleft">
                <h1 className="Aboutus">About <span style={{ color: "#fa949d" }}>Us</span></h1>
                <div className="teamleftcontent">
                    <h2>We are a team of creative and hardworking sphomores from MNIT united to develop amazing stuff.
                        <br></br>
                        <h2 style={{ textDecoration: "underline" }}>Contact Us</h2>
                        <a
                            href="https://github.com/2019UCP1350/Flipper"
                            style={{ fontSize: 40, textDecoration: "none", color: "white" }}
                        >
                            {" "}
                            <i className="fab fa-github" ></i>
                        </a>
                    </h2>
                </div>
            </div>
            <div className="teamright">
                <Team className="teamrightimg"></Team>
            </div>

        </div>
    )
}
