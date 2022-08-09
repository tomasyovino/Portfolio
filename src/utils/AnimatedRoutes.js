import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../presentation/pages/Home/Home';
import About from '../presentation/pages/About/About';
import Profile from '../profile/Profile';

const AnimatedRoutes = ({handle}) => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/profile' element={ <Profile handle={handle}/>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;