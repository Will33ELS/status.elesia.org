import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Spinner from "react-bootstrap/Spinner";
import { MdError } from "react-icons/md";
import Categorie from "./Categorie";
import Info from "./Info";

function App() {
    const [ data, setData ] = useState(undefined);

    //RAFRAICHISSEMENT TOUTES LES 30 SECONDES
    useEffect(() => {
        refreshData();
        const id = setInterval(() => {
            refreshData();
        }, 30 * 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <Header/>
            <main>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 content py-5 p-lg-5">
                            {data === undefined ? (
                                <div className="text-center">
                                    <Spinner animation="border"/>
                                    <p>Chargement des données en cours...</p>
                                </div>
                            ) : data === null ? (
                                <div className="text-center">
                                    <MdError size="2.5em"/>
                                    <p>Un incident à eu lieu au chargement des données !</p>
                                </div>
                            ) : (
                                <>
                                    <Info data={ data } />
                                    {
                                        data.map((categorie) => (
                                            <Categorie key={ categorie.id } categorie={ categorie }/>
                                        ))
                                    }
                                    <p className="mx-3 text-center text-lg-left" style={{ fontSize: "20px"}}>Actualisation de la page toutes les 30 secondes</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );

    function refreshData(){
        fetch("http://localhost:3000/").then(response => response.json())
            .then(setData, () => setData(null));
    }
}

export default App;
