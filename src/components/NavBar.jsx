import { NavLink, Link } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <Link to="/">
                <img src="Marvel.jpg" alt="marvel logo" height="400" width="1200" />
            </Link>
            <nav>
                <NavLink to="/characters" activeClassName="active"><b>Characters</b></NavLink> <span></span> <NavLink to="/comics" activeClassName='active'><b>Comics</b></NavLink>
            </nav>
        </>
    )
}

export default NavBar;