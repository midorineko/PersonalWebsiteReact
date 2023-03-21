import { useContext } from 'react'
//Context
import { UserContext } from '../../contexts/UserContext'
import Login from "../login/login.component";
import LEDs from '../leds/leds.component';


function LedLoginCheck() {
  const { user } = useContext(UserContext)
  if (user) {
    return <LEDs user={user}/>
  } else {
    return <Login />
  }
}

export default LedLoginCheck