import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const EtudiantListe = () => {
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/etudiant/read')
            .then(response => {
                setEtudiants(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des étudiants', error);
            });
    }, []);

    return (
        <div>
            <h2>Liste des étudiants</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>Prénom</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {etudiants.map(etudiant => (
                            <TableRow key={etudiant.noEtudiantNat}>
                                <TableCell>{etudiant.nom}</TableCell>
                                <TableCell>{etudiant.prenom}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default EtudiantListe;
