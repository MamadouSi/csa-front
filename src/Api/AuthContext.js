import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (credentials) => {
        console.log('Informations d\'identification envoyées:', credentials);

        return new Promise((resolve, reject) => {
            fetch('http://localhost:8081/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    }
                    throw new Error('Authentification échouée');
                })
                .then((data) => {
                    console.log('Authentification réussie:', data);
                    setUser({ login: credentials.login });
                    resolve(); // Résoudre la promesse en cas de réussite
                })
                .catch((error) => {
                    console.error('Erreur d\'authentification:', error.message);
                    reject(error); // Rejeter la promesse en cas d'échec
                });
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
