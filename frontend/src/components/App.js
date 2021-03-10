import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Organisation from "./Organisation";
import Tab from "./Tab"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <main>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 px-0 content">
                            <Tab />
                            <div className="px-lg-5 py-4">
                                <Switch>
                                    <Route path="/" exact>
                                        <Organisation key="1" apiURL="https://status.elesia.org/api/" />
                                    </Route>
                                    <Route path="/mojang" exact>
                                        <Organisation key="2" apiURL="https://status.elesia.org/api/mojang" />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
