import './Contact.css';
import { motion } from 'framer-motion';
import Message from '../../components/interactions/Message/Message';
import Form from '../../components/interactions/Form/Form';
import Footer from '../../components/pagesElements/Footer/Footer';

const Contact = () => {
    return(
        <motion.section className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 2}}}
            exit={{opacity: 0}}
        >
            <div className='contact_flexContainer'>
                <Message />
                <Form />
            </div>
            <Footer />
        </motion.section>
    );
}

export default Contact;