import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './presentation/components/pagesElements/Header/Header.js';
import AnimatedRoutes from './utils/AnimatedRoutes';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [pathFlag, setPathFlag] = useState(true);

  const styles = {
    backgroundColor: {
      backgroundColor: !pathFlag ? "white" : "#141414"
    }
  }

  return (
    <div className="App" style={styles.backgroundColor}>
      <BrowserRouter>
        <Header pathFlag={pathFlag}/>
        <AnimatedRoutes handle={setPathFlag} />
      </BrowserRouter>
    </div>
  );
}

export default App;
