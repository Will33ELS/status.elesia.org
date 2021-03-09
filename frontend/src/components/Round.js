import '../style/Round.scss'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function Round({ id, status }){
    return (
        status === 1 ? (
            <OverlayTrigger key={id} transition={false} overlay={<Tooltip style={{ fontSize: "25px"}} id={`item-tooltip-${id}`}>En ligne</Tooltip>}>
                {(props) =>  <div {...props} className="my-auto round round-green" />}
            </OverlayTrigger>
        ) : status === 2 ? (
            <OverlayTrigger key={id} transition={false} overlay={<Tooltip style={{ fontSize: "25px"}} id={`item-tooltip-${id}`}>Partiellement indisponible</Tooltip>}>
                {(props) =>  <div {...props} className="my-auto round round-orange" />}
            </OverlayTrigger>
        ) : status === 3 ? (
            <OverlayTrigger key={id} transition={false} overlay={<Tooltip style={{ fontSize: "25px", fontWeight: "bold"}} id={`item-tooltip-${id}`}>Hors ligne</Tooltip>}>
                {(props) =>  <div {...props} className="my-auto round round-red" />}
            </OverlayTrigger>
        ) : (
            <OverlayTrigger key={id} transition={false} overlay={<Tooltip style={{ fontSize: "25px"}} id={`item-tooltip-${id}`}>En maintenance</Tooltip>}>
                {(props) =>  <div {...props} className="my-auto round round-blue" />}
            </OverlayTrigger>
        )
    )
}

export default Round
