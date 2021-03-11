import Spinner from "react-bootstrap/Spinner";
import { MdCached, MdError } from "react-icons/md";
import Info from "./Info";
import Categorie from "./Categorie";
import { useEffect, useState } from "react";

function Organisation({ apiURL }) {
	const [data, setData] = useState(undefined);

	// RAFRAICHISSEMENT TOUTES LES 30 SECONDES
	useEffect(() => {
		function refreshData() {
			fetch(apiURL).then(response => response.json()).then(setData, () => setData(null));
		}

		refreshData();
		const id = setInterval(refreshData, 30 * 1000);
		return () => clearInterval(id);
	}, [apiURL]);

	return (
			data === undefined ? (
					<div className="text-center">
						<Spinner animation="border" />
						<p>Chargement des données en cours...</p>
					</div>
			) : data === null ? (
					<div className="text-center">
						<MdError size="2.5em" />
						<p>Un incident à eu lieu au chargement des données !</p>
					</div>
			) : (
					<>
						<Info data={data} />
						{data.map(categorie => <Categorie key={categorie.id} categorie={categorie} />)}
						<p className="mx-3 text-center" style={{ fontSize: "20px", opacity: 0.8, fontStyle: "italic" }}>
							<MdCached /> Actualisation de la page toutes les 30 secondes
						</p>
					</>
			)
	);
}

export default Organisation;
