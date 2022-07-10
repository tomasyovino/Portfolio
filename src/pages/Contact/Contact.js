import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    return(
        <motion.section className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 2}}}
            exit={{opacity: 0}}
        >
            <h2>Contáctame</h2>
        </motion.section>
    );
}

export default Contact;