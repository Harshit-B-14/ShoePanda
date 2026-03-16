import {Outlet} from "react-router-dom";
import Navbar from "./navbar";
import panda from "../assets/panda-logo.jpg"

function Layout(){
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={panda}/>
                    <p>ShoePanda</p>
                </div>
                <Navbar />
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;