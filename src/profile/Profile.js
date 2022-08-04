import "./Profile.css";
import { useEffect } from "react";
import NavBar from "./components/pagesElements/Navbar/NavBar";
import Banner from "./components/sections/Banner/Banner";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";

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
            <Projects />
        </div>
    );
}

export default Profile;