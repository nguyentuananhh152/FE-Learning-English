
import './App.css';
import Appbar from './components/AppBar';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { Routes  } from 'react-router-dom';
import Search from './components/Search.js';
import Test from './components/Test';
import Statistical from './components/Statistical';
import History from './components/History';

// import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Appbar></Appbar>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Search/>} />
              <Route exact path="/test" element={<Test/>} />
              <Route exact path="/statistical" element={<Statistical/>}/>
              <Route exact path="/history" element={<History/>}/>
              {/* <Route component={NotFound} /> */}
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
