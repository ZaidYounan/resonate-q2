import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styling/User.css';

function User({ id }){

    const [ user, setUser ] = useState([]);

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
          setUser(response.data);
          console.log(response.data)
      })
      .catch(error => {
          console.log(error)
      })
    }, []);

    return (
        <div className="user-page">
            <Link to="/" className="back-link"> <i class="fas fa-arrow-left fa-lg"></i> Contacts</Link>
            { user.address ? (
                <div className="user-container">
                    <i class="fas fa-user fa-10x four"></i>
                    <div className="user-text">
                        <p><strong>{user.name.toUpperCase()}</strong></p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                        <p><strong>Company:</strong> {user.company.name} - {user.company.catchPhrase}; {user.company.bs}</p>
                    </div>
                </div>
                ) : (<div><h1>Loading...</h1></div>)
            }
        </div>  
    )
}

export default User
