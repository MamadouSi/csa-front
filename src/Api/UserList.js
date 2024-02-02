// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/users/read')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs', error);
            });
    }, []);

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.login} - {user.role}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
