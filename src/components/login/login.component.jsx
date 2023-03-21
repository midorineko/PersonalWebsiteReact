import { Auth } from 'aws-amplify'
import './login.styles.scss'

function Login() {
  return (
    <div className="loginContainer">
      <img className="loginButton" border="0" alt="Login with Amazon"
        src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_312x64.png"
        width="312" height="64" onClick={() => Auth.federatedSignIn({ provider: 'LoginWithAmazon' })}/>

    </div>
  )
}

export default Login
