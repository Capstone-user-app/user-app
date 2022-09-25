import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-filename-extension
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

export default LogoutButton
