import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation.component'
import Home from './components/home/home.component'
import About from './components/about/about.component'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Community from './components/community/community.component';
import LEDs from './components/leds/leds.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='' element={<Home/>}>
          <Route path='' element={<About/>}/>
        </Route>
      </Route>
      <Route path="/leds" element={<LEDs/>}></Route>
    </Routes>





  );
}

export default App;
