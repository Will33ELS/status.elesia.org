import Banniere from '../elesia-status.jpg'

function Header(){
    return (
        <header>
            <img src={ Banniere } className="my-4 img-fluid mx-auto d-block" alt="Bannière Elesia"/>
        </header>
    )
}

export default Header
