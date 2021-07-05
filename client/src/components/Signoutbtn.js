import React, { useContext } from 'react'
import { Context as AuthContext } from "../context/AuthContext"
import { useHistory } from "react-router-dom";

export default function Signoutbtn() {
    let history = useHistory();
    const { signout } = useContext(AuthContext);
    return (
        <div className="signoutbutton" onClick={()=>signout(history)}>
            SIGN OUT
        </div>
    )
}
