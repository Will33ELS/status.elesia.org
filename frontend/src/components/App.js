import Header from "./Header";
import Footer from "./Footer";
import Organisation from "./Organisation";
import Tab from "./Tab";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const organisations = [
	{
		"name": "Elesia",
		"path": "/",
		"api": "https://status.elesia.org/api/"
	},
	{
		"name": "Mojang",
		"path": "/mojang",
		"api": "https://status.elesia.org/api/mojang"
	}
];

function App() {
	return (
			<BrowserRouter>
				<Header />
				<main>
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-12 col-lg-10 px-0 content">
								<Tab organisations={organisations} />
								<div className="px-lg-5 py-4">
									<Switch>
										{organisations.map((organisation, i) => (
												<Route key={i} path={organisation.path} exact>
													<Organisation apiURL={organisation.api} />
												</Route>
										))}
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</BrowserRouter>
	);
}

export default App;
