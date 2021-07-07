import React,{useEffect} from "react";
import { useHistory  } from "react-router";
// import {Context as AuthContext} from "../context/AuthContext";

const ProtectedRoutes=({Component})=>{
    let history=useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push("/");
        }
    },);
    return <Component/>
}

export default ProtectedRoutes;