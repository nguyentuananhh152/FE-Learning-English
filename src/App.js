
import './App.css';
import Appbar from './components/AppBar';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { Routes  } from 'react-router-dom';
import ListCourse from './components/ListCourse';
import ListLesson from './components/ListLesson';
import Home from './components/Home';

// import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Appbar></Appbar>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/listcourse" element={<ListCourse/>}/>
              <Route exact path="/listlesson" element={<ListLesson/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
