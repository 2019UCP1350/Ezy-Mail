import React from 'react'
import { ReactComponent as Emailcomposeimage } from ".././images/emailcompose.svg"
import "./../css/Compose.css"
import EmailInput from '../components/EmailInput';
import Signoutbtn from "../components/Signoutbtn"
export default function Emailcompose() {
    return (

        <div>
            <Signoutbtn />
            <h1 style={{ marginLeft: "30%", color: "white" }} className="roboto">Compose&nbsp;&nbsp;Your&nbsp;&nbsp;<span style={{ color: "#fa949d" }}>Email</span></h1>
            <div className="Composediv">
                <div className="composeleftimage">
                    <Emailcomposeimage></Emailcomposeimage>
                </div>
                <div className="composerightform">
                    <EmailInput></EmailInput>
                </div>
            </div>

        </div>
    )
}
