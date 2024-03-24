import { Link, Outlet } from "react-router-dom";
import NavbarLinkStyle from "./NavbarLinkStyle";

const SharedLink = () => {
    return (
        <>
            <NavbarLinkStyle />
            <Outlet />
        </>
    );
};
export default SharedLink;
