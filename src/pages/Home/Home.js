import './Home.css';
import linkedin from '../../assets/icons/linkedin_icon.png';
import instagram from '../../assets/icons/instagram_icon.png';
import github from '../../assets/icons/github_icon.png';
import { motion } from 'framer-motion';

const Home = () => {
    return(
        <motion.section className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 1}}}
            exit={{opacity: 0, transition:{duration: 1}}}
        >
            <div>
                <h1>Hola, <br /> soy Tomás</h1>
                <h3>Desarrollador Fullstack</h3>
                <div>
                    <button>Visita mi perfil</button>
                    <button>Contáctame</button>
                </div>
            </div>
            <nav>
                <img src={linkedin} alt='logo' />
                <img src={instagram} alt='logo' />
                <img src={github} alt='logo' />
            </nav>
        </motion.section>
    );
}

export default Home;