import './Header.css';
import logo from '../../../assets/icons/logo_icon.png';
import logo1200 from '../../../assets/icons/logo1200_icon.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Inicio</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Sobre mí</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}sd>Contáctame</NavLink>
            </nav>
            <img id="logo" src={logo} alt='logo' />
            <img id="logo1200" src={logo1200} alt='logo' />
        </header>
    );

}

export default Header;