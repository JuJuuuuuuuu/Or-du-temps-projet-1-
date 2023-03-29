import React, {Component} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Accueil from './pages/accueil';
import Produits from './pages/produits';
import FAQ from './pages/faq';
import Panier from './pages/panier';
import theme from "./components/theme";
import {ThemeProvider} from "@mui/material";


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className={"App"}>
                    <Routes>
                        <Route path={"/"} element={<Accueil/>}/>
                        <Route path={"/produits"} element={<Produits/>}/>
                        <Route path={"/faq"} element={<FAQ/>}/>
                        <Route path={"/panier"} element={<Panier/>}/>
                    </Routes>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
