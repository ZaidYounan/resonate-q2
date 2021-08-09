import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
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
            <div className="user-container">
            (WORK IN PROGRESS) {user.name}
            </div>
        </div>
    )
}

export default User
