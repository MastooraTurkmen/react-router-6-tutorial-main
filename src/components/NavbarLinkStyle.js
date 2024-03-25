import { NavLink } from "react-router-dom";

const NavbarLinkStyle = () => {
    return (
        <nav className="navbar">
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/products'>Products</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to='/login'>Login</NavLink>
        </nav>
    );
}

export default NavbarLinkStyle;