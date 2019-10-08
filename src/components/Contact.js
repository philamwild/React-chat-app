import React from 'react';
import './contacts.css'; 


function Contact(props){
    return(
    <div class="Contact">
        <img class="image" src={props.image} alt={props.name}></img>
        <div>
            <p class="name">{props.name}</p>
            <div class="status">
                <div>
                    <p class={props.online ? 'status-online' : 'status-offline'}></p>
                </div>
                <div class="status-text">
                    <p>{props.online ? "online" : "offline"}</p>
                </div>

            </div>
        </div>

    </div>
    
    );
}

export default Contact;