const axios = require("axios");

module.exports = async (req, res) => {
	const httpClient = axios.create();
	httpClient.defaults.timeout = 500;

	let elenox = await httpClient.get("https://www.elenox.net/api/v1/status").then(response => response.data, () => {});
	if (elenox === undefined)
		elenox = { name: "Elenox Network", status: 3, items: [] };
	elenox.id = 1;

	let hizonia = await httpClient.get("https://hizonia.net/api/v1/status").then(response => response.data, () => {});
	if (hizonia === undefined)
		hizonia = { name: "Hizonia Network", status: 3, items: [] };
	hizonia.id = 2;

	res.status(200).json([elenox, hizonia]);
};
