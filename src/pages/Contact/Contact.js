import './Contact.css';
import { motion } from 'framer-motion';
import Message from '../../components/Message/Message';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return(
        <motion.section className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 2}}}
            exit={{opacity: 0}}
        >
            <div>
                <h2 className="contact_title">Contáctame</h2>
                <div className='contact_flexContainer'>
                    <Message />
                    <Form />
                </div>
            </div>
            <Footer />
        </motion.section>
    );
}

export default Contact;