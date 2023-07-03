
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
import SeeMore from './components/SeeMore'
import Course from './components/Course'
import Exercise from './components/Exercise'

// import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/listcourse" element={<ListCourse/>}/>
              <Route exact path="/Course" element={<Course/>}/>
              <Route exact path="/SeeMore" element={<SeeMore/>}/>
              <Route exact path="/Exercise" element={<Exercise/>}/>
              <Route exact path="/listlesson" element={<ListLesson/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
