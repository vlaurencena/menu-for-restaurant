import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { context } from "./context/MenuContext";
import { useContext } from "react";

const Layout = () => {

    const { testMode } = useContext(context);

    testMode ? console.log("Test Mode ON") : console.log("Test Mode OFF");

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/search-dishes">Search Dishes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;