import './Home.css';
import linkedin from '../../../assets/icons/linkedin_icon.png';
import instagram from '../../../assets/icons/instagram_icon.png';
import github from '../../../assets/icons/github_icon.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    

    return(
        <motion.section className="home"
            initial={{bottom: "-100%"}}
            animate={{bottom: 0, transition:{duration: 1}}}
            exit={{top: "100%", transition:{duration: 1}}}
        >
            <div>
                <h1>Hola, <br /> soy Tomás</h1>
                <h3>Desarrollador Fullstack</h3>
                <div>
                    <Link to="/profile" className='link'><button>Visita mi perfil</button></Link>
                    <Link to="/profile#connect" className='link'><button>Contáctame</button></Link>
                </div>
            </div>
            <nav>
                <a target="_blank" href="https://www.linkedin.com/in/tomás-yovino-a0955a238" rel="nofollow noreferrer noopener" className='link'><img src={linkedin} alt='logo' /></a>
                <a target="_blank" href="https://www.instagram.com/tomasyovino/" rel="nofollow noreferrer noopener" className='link'><img src={instagram} alt='logo' /></a>
                <a target="_blank" href="https://www.github.com/tomasyovino " rel="nofollow noreferrer noopener" className='link'><img src={github} alt='logo' /></a>
            </nav>
        </motion.section>
    );
}

export default Home;