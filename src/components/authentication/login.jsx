import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = (classN) => {
  const { loginWithRedirect } = useAuth0()

  return <button type="button" onClick={() => loginWithRedirect()} className={`${classN}`}>Iniciar sesión</button>
}

export default LoginButton
