import banniere from "../elesia-status.jpg";

function Header() {
	return (
			<header>
				<img src={banniere} className="my-4 img-fluid mx-auto d-block" alt="Bannière Elesia" />
			</header>
	);
}

export default Header;
