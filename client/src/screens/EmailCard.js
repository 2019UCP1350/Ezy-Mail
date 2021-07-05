import React, { useState } from 'react'
import "./../css/EmailCard.css"
function EmailCard(props) {    
    var date = new Date(props.date);
    let to = props.to;
    var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (

        <div className="emailCard" >
            <div className="emailLeft">
                <div className="emailLeftTop">{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}<br /> {props.schedule}</div>
                <h1 class="Mailsend">Mail Sended to:-</h1>
                <div className="emailLeftBottom">
                    {
                        to.map(x => { return <p> &#9679; {x}</p> })
                    }
                </div>
            </div>
            <div className="emailRight">
                <h4>Mail Content:-</h4>
                <br></br>
                <innerHTML>
                    {
                        props.content
                    }
                </innerHTML>

            </div>
        </div>
    )
}

export default EmailCard
