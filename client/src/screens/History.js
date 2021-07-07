import React from 'react'
import { useState, useEffect } from "react";
import EmailCard from '../components/EmailCard';
import Signoutbtn from "../components/Signoutbtn"
import ReactHtmlParser from 'react-html-parser';

function History() { 

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const PostData = async () => {
      try {
        let res = await fetch(`/history/${ await localStorage.getItem("email")}`, {
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
  },);

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
            content={ReactHtmlParser(x.content)}
          />
        })
      }
    </div>
  )
}

export default History
