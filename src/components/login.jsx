import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  // eslint-disable-next-line react/button-has-type, react/jsx-filename-extension
  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton
