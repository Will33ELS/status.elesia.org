import "../style/Round.scss";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function Round({ id, status }) {
	let color, text;
	switch (status) {
	case 1:
		color = "green";
		text = "En ligne";
		break;
	case 2:
		color = "orange";
		text = "Partiellement indisponible";
		break;
	case 3:
		color = "red";
		text = "Hors ligne";
		break;
	default:
		color = "blue";
		text = "En maintenance";
	}
	return (
			<OverlayTrigger key={id} transition={false} overlay={<Tooltip style={{ fontSize: "25px" }} id={`item-tooltip-${id}`}>{text}</Tooltip>}>
				{(props) => <div {...props} className={`my-auto round round-${color}`} />}
			</OverlayTrigger>
	);
}

export default Round;
