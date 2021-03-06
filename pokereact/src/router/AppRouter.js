import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Favorites } from "../components/favorites/Favorites";
import { Home } from "../components/home/Home";
import { AboutUs } from "../components/aboutUs/AboutUs";
import PerType from "../components/perType/perType";
import DetailPokemon from "../components/detailPokemon/DetailPokemon";

export const AppRouter = ({ title }) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/favorites">
                    <Favorites />
                </Route>
                <Route exact path="/about-us">
                    <AboutUs />
                </Route>
                <Route exact path="/per-type/:typeName" 
                        component={PerType}>
                </Route>
                <Route exact path="/pokemon-detail/:pokemon" 
                        component={DetailPokemon}>
                </Route>
                <Route exact path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
