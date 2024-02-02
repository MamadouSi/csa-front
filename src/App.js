import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Api/LoginForm';
import ListeUser from './Api/UserList';
import ListeEtudiant from './Api/EtudiantListe';
import { AuthProvider } from './Api/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <h1>        </h1>
                    <Routes>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="/listeuser" element={<ListeUser />} />
                        <Route path="/listeetudiant" element={<ListeEtudiant />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
