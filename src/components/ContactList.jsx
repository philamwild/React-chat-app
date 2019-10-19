import React from "react";
import Contact from "./Contact";

const itemList = [
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Eleanor Ferguson"
  },

  {
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    name: "Shane Henderson"
  },

  {
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Samantha Kuhn"
  },

  {
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Kaylee Prescott"
  },

  {
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Jerem Valles"
  }
];

const ContactList = () => (
  <div>
    {itemList.map((item, i) => (
      <Contact
        key={i}
        image={item.image}
        name={item.name}
        online={item.online}
      />
    ))}
  </div>
);

export default ContactList;
