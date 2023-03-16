import './App.css';
import { UserContextProvider } from './contexts/UserContext'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation.component'
import Home from './components/home/home.component'
import About from './components/about/about.component'
import BackgroundImage from './components/backgroundImage/BackgroundImage.component';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import LedLoginCheck from './components/login/ledLoginCheck.component';

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
        <Route path='' element={<BackgroundImage/>}>
          <Route path='' element={<Home/>}>
            <Route path='' element={<About/>}/>
          </Route>
        </Route>
      </Route>
      <Route path="/leds" element={<UserContextProvider><LedLoginCheck/></UserContextProvider>}></Route>
    </Routes>

  );
}

export default App;
