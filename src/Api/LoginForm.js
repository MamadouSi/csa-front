import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login: authLogin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        authLogin({ login, password })
            .then(() => {
                navigate('/listeetudiant');
            })
            .catch((error) => {
                console.error('Erreur d\'authentification:', error.message);
                setError('Identifiant ou mot de passe incorrect');
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
                    Connexion
                </Typography>
                <TextField
                    label="Login"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                    onClick={handleLogin}
                >
                    Connexion
                </Button>
                {error && (
                    <Typography color="error" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                        <ErrorOutline style={{ marginRight: '5px' }} />
                        {error}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default LoginForm;
