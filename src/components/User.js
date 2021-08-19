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
            { user.address ? (
                <div className="user-container">
                    <i className="fas fa-user fa-10x four"></i>
                    <div className="user-text">
                        <p><h1>{user.name.toUpperCase()}</h1></p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong><a href={`http://${user.email}`}>{user.email}</a></p>
                        <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> <a href={`http://${user.website}`}>{`www.${user.website}`}</a></p>
                        <p><strong>Company:</strong> {user.company.name} - {user.company.catchPhrase}; {user.company.bs}</p>
                    </div>
                </div>
                ) : (<div><h1 className="loading-text">Loading...</h1></div>)
            }
            <Link to="/" className="back-link"> <i class="fas fa-arrow-left fa-lg"></i> Contacts</Link>
        </div>  
    )
}

export default User
