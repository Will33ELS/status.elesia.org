import "../style/Categorie.scss";
import Item from "./Item";
import Round from './Round';
import { MdErrorOutline } from "react-icons/md";

function Categorie({ categorie }) {
	return (
			<div key={categorie.id} className="categorie">
				<div className="row categorie-header justify-content-between p-3 mb-5 mx-3">
					<h2>{categorie.name}</h2>
					<Round id={categorie.id} status={categorie.status} />
				</div>
				<div className="categorie-item px-3 mx-3">
					{categorie.items.length === 0 && <div className="error text-center">
						<MdErrorOutline />
						<p>Chargement des données impossible</p>
					</div>}
					{categorie.items.map((item) => <Item key={item.id} item={item} />)}
				</div>
			</div>
	);
}

export default Categorie;
