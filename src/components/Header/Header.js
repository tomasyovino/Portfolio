import './Header.css';
import logo from '../../assets/icons/logo_icon.png';
import logo1200 from '../../assets/icons/logo1200_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/" className='link'><span className='active'>Inicio</span></Link>
                <Link to="/about" className='link'><span className="translate">Sobre mí</span></Link>
                <Link to="/contact" className='link'><span>Contáctame</span></Link>
            </nav>
            <img id="logo" src={logo} alt='logo' />
            <img id="logo1200" src={logo1200} alt='logo' />
        </header>
    );

}

export default Header;