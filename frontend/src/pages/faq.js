import React from 'react';
import Header from "../components/header";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (<Box>
        <Header/>
        <Box sx={{padding: 5}}>
            <Typography gutterBottom variant={"h3"} color={"whitesmoke"}>Foire aux questions</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Quels sont les modes de paiement acceptés ?</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nous acceptons les paiements par carte de crédit, carte de débit, PayPal et virement
                        bancaire.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Combien de temps faut-il pour traiter ma commande ?</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Le traitement des commandes prend généralement de 1 à 2 jours ouvrables. Une fois que votre
                        commande est traitée, vous recevrez une notification par e-mail avec les informations de
                        suivi de votre commande. </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Comment puis-je suivre ma commande ?</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Vous pouvez suivre votre commande en vous connectant à votre compte et en accédant à
                        l'historique des commandes. Vous recevrez également un e-mail de confirmation d'expédition avec
                        un lien de suivi.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Quelle est votre politique de retour ?</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nous acceptons les retours dans les 30 jours suivant la réception de votre commande. Les
                        articles retournés doivent être dans leur état d'origine avec les étiquettes et emballages
                        d'origine. Pour plus d'informations, veuillez consulter notre politique de retour complète sur
                        notre site web.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Comment puis-je contacter le service clientèle ?</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Vous pouvez contacter notre service clientèle par e-mail, téléphone ou chat en direct. Les
                        heures d'ouverture sont de 9h à 18h, du lundi au vendredi. Les détails de contact sont
                        disponibles sur notre site web.</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Box>);
}

export default FAQ;