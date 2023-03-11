import './App.css';
import { UserContextProvider } from './contexts/UserContext'

import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation.component'
import Home from './components/home/home.component'
import About from './components/about/about.component'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Community from './components/community/community.component';
import LEDs from './components/leds/leds.component';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Login from './components/login/login.component';

const isLocalhost = Boolean(
  window.location.hostname.includes('localhost') ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)
const signInURI = awsconfig.oauth.redirectSignIn.split(',')
const signOutURI = awsconfig.oauth.redirectSignOut.split(',')
if (isLocalhost) {
  awsconfig.oauth.redirectSignIn = signInURI[0]
  awsconfig.oauth.redirectSignOut = signOutURI[0]
  console.log('local')
} else if (window.location.hostname.includes('d3asv5ybyyooma')) {
  awsconfig.oauth.redirectSignIn = signInURI[1]
  awsconfig.oauth.redirectSignOut = signOutURI[1]
  console.log('prod')
} else {
  console.log('This is not possible')
}

Amplify.configure(awsconfig);

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='' element={<Home/>}>
          <Route path='' element={<About/>}/>
        </Route>
      </Route>
      <Route path="/leds" element={<UserContextProvider><LEDs/></UserContextProvider>}></Route>
      <Route path="/login" element={<Login/>}></Route>

    </Routes>

  );
}

export default App;
