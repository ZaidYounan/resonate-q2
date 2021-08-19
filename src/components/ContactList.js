import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import './styling/ContactList.css';
import { Link } from 'react-router-dom';

function ContactList() {

  const [ contactList, setContactList ] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setContactList(response.data);
    })
    .catch(error => {
        console.log(error)
    })
  }, []);


    return (
        <div className="contacts-page">
            <div className="topbar"><h1>CONTACTS</h1></div>
        
        { contactList.length ? (
          contactList.map((data) => (
            <div className="contact-card">
              <i className="fas fa-user fa-9x one"></i>
              <div className="contact-text two"> 
                <p><strong><a href={`/${data.id}`}>{data.name.toUpperCase()}</a></strong></p> 
                <p><strong>Username:</strong> {data.username}</p>
                <Link to={`/${data.id}`} className="view-link">View Full Profile</Link>
              </div>
              <div className="three">
                <p><strong>Phone number:</strong> {data.phone}</p>
                <p><strong>Email:</strong> <a href={`http://${data.email}`}>{data.email.toLowerCase()}</a></p>
                <p><a href={`http://${data.website}`}>{`www.${data.website}`}</a></p>
              </div>
            </div>
            ))) : (<div><h1 className="loading-text">Loading...</h1></div>)
        }
      </div>
    )
}

export default ContactList;
