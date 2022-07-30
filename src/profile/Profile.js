import "./Profile.css";
import { useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/sections/Banner/Banner";
import Skills from "./components/sections/Skills/Skills";

const Profile = ({handle}) => {
    useEffect(() => {
        handle(false);
        return () => handle(true);
    }, [handle]);

    return(
        <div id="profile">
            <NavBar />
            <Banner />
            <Skills />
        </div>
    );
}

export default Profile;