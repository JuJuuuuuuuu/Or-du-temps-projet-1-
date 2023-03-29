import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/'
});


const Produits = () => {
    const [produits, setProduits] = useState([]);
    const [quantites, setQuantites] = useState({});


    useEffect(() => {
        axiosInstance.get('/produits')
            .then((response) => {
                setProduits(response.data);
                console.log(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleAjouterAuPanier = (produitId) => {
        const quantite = quantites[produitId];
        axiosInstance.post('/panier/ajouter', {
            "id": produitId,
            "quantite": quantite
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleQuantiteChange = (produitId, quantite) => {
        setQuantites({...quantites, [produitId]: quantite});
    };

    return (<Box>
            <Header/>
            <Box sx={{padding: 5}}>
                <Grid container
                      spacing={2}
                      alignItems={"stretch"}
                >
                    {produits.map((produit) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={produit.id} style={{display: "flex"}}>
                            <Card style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                width: "100%"
                            }}>
                                <CardMedia
                                    component="img"
                                    alt={produit.nom}
                                    height="200"
                                    image={`${axiosInstance.getUri()}/img/${produit.image}`}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom style={{textAlign: "center"}}>
                                        <b>{produit.nom}</b>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {produit.description}
                                    </Typography>
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Typography variant="subtitle1" style={{textAlign: "right"}}>
                                            <em>Stock: {produit.stock}</em>
                                        </Typography>
                                        <Typography variant="h6" style={{textAlign: "right"}}>
                                            <b>{produit.prix}€</b>
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <CardActions style={{justifyContent: "space-evenly", marginBottom: "1rem"}}>
                                    <FormControl sx={{width: "40%"}}>
                                        <InputLabel id={`stock_select_label-${produit.nom}`}>Quantité</InputLabel>
                                        <Select
                                            labelId={`stock_select_label-${produit.nom}`}
                                            id={`stock_select-${produit.nom}`}
                                            label="Quantité"
                                            value={quantites[produit.id] || ""}
                                            onChange={(event) =>
                                                handleQuantiteChange(produit.id, event.target.value)}
                                        >
                                            <MenuItem value="">0</MenuItem>
                                            {Array.from(Array(produit.stock).keys()).map((i) => (
                                                <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <IconButton size={"large"}
                                                onClick={
                                                    () => {
                                                        handleAjouterAuPanier(produit.id);
                                                        alert(`Vous avez ajouté ${quantites[produit.id]} ${produit.nom} au panier`)
                                                    }}
                                                disabled={quantites[produit.id] == null || quantites[produit.id] === ''}
                                    >
                                        <AddShoppingCartIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Produits;