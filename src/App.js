import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.js';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
