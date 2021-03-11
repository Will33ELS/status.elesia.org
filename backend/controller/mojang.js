const axios = require("axios");

module.exports = async (req, res) => {
	const mojang = await axios.get("https://status.mojang.com/check").then((response => response.data), () => {});
	const result = { name: "Mojang", items: [] };
	if (mojang === undefined) {
		result.status = 3;
	} else {
		mojang.forEach(items => {
			Object.entries(items).forEach(([key, value]) => {
			    const item = { id: 0 };
                switch (key) {
                case "minecraft.net":
                    item.id = 1;
                    item.name = "Site officiel : Minecraft.net";
                    break;
                case "session.minecraft.net":
                    item.id = 2;
                    item.name = "Sessions multijoueurs";
                    break;
                case "account.mojang.com":
                    item.id = 3;
                    item.name = "Site de gestion de votre compte Mojang";
                    break;
                case "authserver.mojang.com":
                    item.id = 4;
                    item.name = "Serveur d'authentification";
                    break;
                case "textures.minecraft.net":
                    item.id = 5;
                    item.name = "Serveur de textures (skins / capes / têtes)";
                    break;
                }
                if (item.id) {
                    item.status = value === "red" ? 3 : value === "orange" ? 2 : 1;
                    result.items.push(item);
                }
            })
		});
		const unavailableservice = result.items.filter(item => item.status === 3).length;
		result.status = unavailableservice === result.items.length ? 3 : unavailableservice > 0 ? 2 : 1;
	}
	result.id = 3;

	res.status(200).json([result]);
}
