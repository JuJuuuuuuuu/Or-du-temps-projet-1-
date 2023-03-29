import React from 'react';
import Header from "../components/header";
import {Box, Typography} from "@mui/material";

const Accueil = () => {
    return (
        <Box>
            <Header/>
            <Box sx={{padding: 5}}>
                <Typography gutterBottom variant={"h3"} color={"whitesmoke"}>Bienvenue sur le site de l'Or du Temps</Typography>
                <Typography padding={4} color={"ghostwhite"}>
                    Bienvenue sur Or du Temps, votre destination en ligne pour des bijoux en or exceptionnels. Nous
                    sommes passionnés par la création de bijoux en or de qualité supérieure, qui durent toute une
                    vie et qui restent toujours à la mode.<br/><br/>
                    Notre collection comprend exclusivement des bijoux en or pour femmes, des bagues aux colliers,
                    des bracelets aux boucles d'oreilles. Chaque pièce est soigneusement conçue pour répondre à
                    nos normes élevées de qualité et de beauté.<br/><br/>
                    Nous proposons des bijoux plaqués or et or, de la plus haute qualité, pour assurer la durabilité
                    de nos bijoux. Nous choisissons diamants et perles soigneusement sélectionnés, les plus beaux et
                    les plus brillants, pour ajouter une touche de glamour à chaque pièce.<br/><br/>
                    Nous croyons que le processus d'achat de bijoux devrait être une expérience positive et
                    agréable, c'est pourquoi nous nous engageons à offrir un service clientèle exceptionnel. Nous
                    sommes là pour répondre à toutes vos questions et vous aider à trouver le bijou parfait pour
                    vous-même ou pour offrir en cadeau.<br/><br/>
                    Naviguez sur notre site pour découvrir notre collection complète de bijoux en or, y compris des
                    bijoux classiques et intemporels ainsi que des designs plus modernes et audacieux.<br/><br/>
                    Nous vous remercions de visiter Or du Temps, et nous espérons que vous trouverez le bijou en or
                    parfait pour compléter votre style et votre personnalité.
                </Typography>
            </Box>
        </Box>

    );
}

export default Accueil;