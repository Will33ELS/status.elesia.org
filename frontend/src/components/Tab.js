import "../style/Tab.scss";
import Nav from "react-bootstrap/Nav";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function Tab({ organisations }) {
	return (
			<div className="mb-4">
				<Nav variant="tabs" defaultActiveKey="/">
					{organisations.map((organisation, i) => <TabItem key={i} organisation={organisation} />)}
				</Nav>
			</div>
	);
}

function TabItem({ organisation }) {
	const match = useRouteMatch({ path: organisation.path, exact: true });
	const [warning, setWarning] = useState(false);
	useEffect(() => {
		function refresh() {
			fetch(organisation.api).then(response => response.json()).then(res => {
				let warn = false;
				for (const cat of res) {
					if (cat.status !== 1) {
						warn = true;
						break;
					}
				}
				setWarning(warn);
			}, () => setWarning(true));
		}

		refresh();
		const id = setInterval(refresh, 30 * 1000);
		return () => clearInterval(id);
	}, [organisation.api]);
	return (
			<Nav.Item className={match && "nav-item-active"}>
				<Nav.Link as={Link} to={organisation.path}>
					{organisation.name}
					{warning && <FaExclamationTriangle className="nav-item-indicator" size=".75em" />}
				</Nav.Link>
			</Nav.Item>
	);
}

export default Tab;
