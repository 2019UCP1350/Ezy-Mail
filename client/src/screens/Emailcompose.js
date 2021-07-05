import React, { useEffect, useContext } from 'react'
import { ReactComponent as Emailcomposeimage } from ".././images/emailcompose.svg"
import "./../css/Compose.css"
import EmailInput from './EmailInput';
import { Context as AuthContext } from "../context/AuthContext"
import Signoutbtn from "../components/Signoutbtn"
export default function Emailcompose() {
    const { tryLocalLogin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalLogin();
    }, [])
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
