import {Outlet} from "react-router-dom";
import Navbar from "./navbar";

function Layout(){
    return (
        <>
            <Navbar className = "navbar"/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;