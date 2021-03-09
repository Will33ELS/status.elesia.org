var axios = require("axios");

module.exports = async (req, res, next) => {
    let mojang = await axios.get("https://status.mojang.com/check").then((response => response.data), () => {});
    let result = { items:[] };
    if(mojang === undefined){
        result = { name: "Mojang", status: 3, items:[] }
    }else{
        result.name = "Mojang";
        mojang.forEach(items => {
            Object.entries(items).forEach(([key, value]) => {
                if(key === "minecraft.net"){
                    result.items.push({
                        id: 1,
                        name: "Site officiel: Minecraft.net",
                        status: value === "red" ? 3 : value === "orange" ? 2 : 1
                    })
                }else if(key === "session.minecraft.net"){
                    result.items.push({
                        id: 2,
                        name: "Sessions multijoueurs",
                        status: value === "red" ? 3 : value === "orange" ? 2 : 1
                    })
                }else if(key === "account.mojang.com"){
                    result.items.push({
                        id: 3,
                        name: "Site de gestion de votre compte Mojang",
                        status: value === "red" ? 3 : value === "orange" ? 2 : 1
                    })
                }else if(key === "authserver.mojang.com"){
                    result.items.push({
                        id: 4,
                        name: "Serveur d'authentification",
                        status: value === "red" ? 3 : value === "orange" ? 2 : 1
                    })
                }else if(key === "textures.minecraft.net"){
                    result.items.push({
                        id: 5,
                        name: "Serveur de textures (Skins + Capes)",
                        status: value === "red" ? 3 : value === "orange" ? 2 : 1
                    })
                }
            })
        });
        const unavailableservice = result.items.filter(item => item.status === 3).length;
        result.status = unavailableservice === result.items.length ? 3 : unavailableservice > 0 ? 2 : 1
    }
    result.id = 3;

    res.status(200).json([ result ]);
}
