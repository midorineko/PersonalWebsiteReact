import { Auth } from 'aws-amplify'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Auth.federatedSignIn({ provider: 'LoginWithAmazon' })}>
        Sign In with Amazon
      </button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>

    </div>
  )
}

export default Login
