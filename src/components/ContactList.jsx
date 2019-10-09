import React from 'react';
import Contact from './Contact'


    const itemList = [
        {
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Eleanor Ferguson",
        online: true,   
        },

        {
        image: 'https://randomuser.me/api/portraits/men/80.jpg',
        name: 'Shane Henderson',
        online: false,   
        },

        {
        image: 'https://randomuser.me/api/portraits/men/56.jpg',
        name: 'Mario Kuhn',
        online: true,   
        },

        {
        image: 'https://randomuser.me/api/portraits/women/52.jpg',
        name: 'Samantha Kuhn',
        online:  false  
        },

        {
        image: 'https://randomuser.me/api/portraits/women/40.jpg',
        name: 'Kaylee Prescott',
        online: true
        },
        ]  




const ContactList = () => (
    <div>
    {itemList.map((item,i) =>(
        <Contact key={i} image={item.image} name={item.name} online={item.online} />
    ))}
    </div>
);


export default ContactList;