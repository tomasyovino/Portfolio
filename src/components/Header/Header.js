import './Header.css';
import logo from '../../assets/icons/logo_icon.png';
import logo1200 from '../../assets/icons/logo1200_icon.png';

const Header = () => {
    return(
        <header>
            <nav>
                <span className='active'>Inicio</span>
                <span>Sobre mí</span>
                <span>Contáctame</span>
            </nav>
            <img id="logo" src={logo} alt='logo' />
            <img id="logo1200" src={logo1200} alt='logo' />
        </header>
    );

}

export default Header;