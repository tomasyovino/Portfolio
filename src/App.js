import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './presentation/components/pagesElements/Header/Header.js';
import AnimatedRoutes from './utils/AnimatedRoutes';

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
