import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import axios from "axios";
import {Box, Button, IconButton, Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Panier = () => {
    const [panier, setPanier] = useState([]);

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:4000/'
    });


    useEffect(() => {
        handleRafraichirPanier();
    }, []);


    const handleRafraichirPanier = () => {
        axiosInstance.get('/panier')
            .then((response) => {
                setPanier(response.data);
                console.log(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    const handleRetirerDuPanier = (id_produit) => {
        axiosInstance.delete('/panier/retirer', {
            data: {
                "id": id_produit
            }
        }).then(() => {
            handleRafraichirPanier();
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleRetirerStock = (id_produit, quantite) => {
        axiosInstance.post('/produits/retirer', {
            "id": id_produit,
            "quantite": quantite

        }).catch((error) => {
            console.log(error);
        });
    }

    const handleViderPanier = () => {
        for (let i = 0; i < panier.length; i++) {
            handleRetirerStock(panier[i].id_produit, panier[i].quantite);
            handleRetirerDuPanier(panier[i].id_produit)
        }
        handleRafraichirPanier();
        alert(`Vous avez bien commandé:
        ${panier.map((item) => (`${item.quantite} ${item.nom} `))}`)
    }


    return (

        <Box>
            <Header/>
            <Box sx={{padding: 5, height: "80vh"}}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align={"right"}>Produit</TableCell>
                                <TableCell align={"right"}>Quantité</TableCell>
                                <TableCell align={"right"}>Prix unitaire</TableCell>
                                <TableCell align={"right"}>Prix total</TableCell>
                                <TableCell align={"right"}></TableCell>
                            </TableRow>
                        </TableHead>
                        {panier.map((item, index) => (<TableRow key={index}>
                            <TableCell align={"right"}>{item.nom}</TableCell>
                            <TableCell align={"right"}>{item.quantite}</TableCell>
                            <TableCell align={"right"}>{item.prix}€</TableCell>
                            <TableCell align={"right"}>{item.prix * item.quantite}€</TableCell>
                            <TableCell align={"center"}>
                                <IconButton
                                    onClick={() => {
                                        console.log(item)
                                        handleRetirerDuPanier(item.id_produit)
                                    }}
                                    size={"large"}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>))}
                        <TableRow>
                            <TableCell align={"right"} colSpan={3}><b>Total</b></TableCell>
                            <TableCell align={"right"}>
                                <b>{panier.reduce((total, item) => total + item.prix * item.quantite, 0)}€</b>
                            </TableCell>
                            <TableCell align={"center"}>
                                <Button
                                    onClick={() => {
                                        handleViderPanier()
                                    }}
                                    variant={"contained"}
                                    color={"error"}
                                >
                                    Commander
                                </Button>
                            </TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Box>
        </Box>

    );
}

export default Panier;