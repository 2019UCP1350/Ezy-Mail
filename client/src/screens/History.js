import React from 'react'
import { useState, useEffect, useContext } from "react";
import EmailCard from './EmailCard';
import { Context as AuthContext } from "../context/AuthContext"
import Signoutbtn from "../components/Signoutbtn"

function History() { 
  const { tryLocalLogin } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    tryLocalLogin();
    const PostData = async () => {
      try {
        let res = await fetch(`/history/${localStorage.getItem("email")}`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        res = await res.json();
        setUserData(res);
        console.log(res);

      } catch (err) {
        console.log(err.message);
      }
    };

    PostData();
  }, []);

  return (
    <div>
      <Signoutbtn />
      <h1 style={{ color: "white", marginTop: "5%", marginLeft: "5%", fontFamily: "Courier New, monospace", fontSize: "60px" }}>YOUR MAIL <span style={{ color: "#fa949d" }}>HISTORY</span></h1>
      {
        userData.map(x => {
          return <EmailCard
            date={x.time}
            to={x.to}
            schedule={x.schedule}
            content={x.content}
          />
        })
      }
    </div>
  )
}

export default History
