import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { context } from "./context/MenuContext";
import { useContext } from "react";

const Layout = (props) => {

    const { testMode } = useContext(context);

    testMode ? console.log("Test Mode ON") : console.log("Test Mode OFF");


    const handleLogout = () => {
        props.setToken("");
        localStorage.clear();
    }

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
                        <li className="nav-bar__logout">
                            <button onClick={handleLogout}>Logout</button>
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