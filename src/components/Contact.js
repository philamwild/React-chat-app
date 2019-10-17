import React from 'react';
import './contacts.css'; 



class  Contact extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        online: false
    };
    }
    render() {
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt={this.props.name}></img>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status"
                    onClick = {event => {
                        const newOnline = !this.state.online;
                        this.setState({ online: newOnline });
                    }}
                    >
                        <div className={this.state.online ? 'status-online' : 'status-offline'}
                            
                            >
 
                        </div>
                        <div className="status-text">
                            <p>{this.state.online ? "online" : "offline"}</p>
                        </div>
        
                    </div>
                </div>
                </div>
            );
        }
}

export default Contact;