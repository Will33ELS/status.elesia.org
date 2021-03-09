import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import '../style/Tab.scss';
import { useRouteMatch } from "react-router-dom";

function Tab(){
    let elesia = useRouteMatch({path: "/", exact: true});
    let mojang = useRouteMatch({path: "/mojang", exact: true});
    return (
        <div className="mb-4">
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item className={elesia && "nav-item-active"}>
                    <Nav.Link as={Link} to="/">
                        Elesia
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={mojang && "nav-item-active"}>
                    <Nav.Link as={Link} to="/mojang">
                        Mojang
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Tab;
