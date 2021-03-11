import "../style/Footer.scss";

function Footer() {
	return (
			<footer>
				<p className="m-3">
					{new Date().getFullYear()} &copy; Application développée par <a href="https://william-aventin.fr" target="_blank" rel="noopener noreferrer">William AVENTIN</a> pour <a href="https://www.elesia.org" target="_blank" rel="noopener noreferrer">Elesia SAS</a>, tous droits réservés
				</p>
			</footer>
	);
}

export default Footer;
