import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import About from './routes/about/about.component'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='' element={<Home/>}>
          <Route path='' element={<About/>}/>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
