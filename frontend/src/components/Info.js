import { FaCheckCircle, FaTools } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { MdError } from "react-icons/md";
import React from "react";
import Alert from "react-bootstrap/Alert"
import '../style/Info.scss'

function Info({ data }){

    const projetCount = data.length;
    const offlineCount = data.filter(projet => projet.status === 3 || projet.status === 2).length;
    const maintenanceCount = data.filter(projet => projet.status === 4).length;

    return (
        <div className="mx-3">
            {
                offlineCount === projetCount ? <Alert variant="danger"><MdError/> Tous les systèmes sont hors services</Alert>
                    : offlineCount > 0 ? <Alert variant="warning"><TiWarning/> Des incidents ont été détectés</Alert>
                        : maintenanceCount > 0 ? <Alert variant="info"><FaTools/> Des maintenances sont en cours</Alert>
                        : <Alert variant="success"><FaCheckCircle/> Tous les systèmes sont opérationnels</Alert>
            }
        </div>
    )
}

export default Info
