import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = (classN) => {
  const { logout } = useAuth0()

  return (
    <button type="button" onClick={() => logout({ returnTo: window.location.origin })} className={`${classN}`}>
      Cerrar sesión
    </button>
  )
}

export default LogoutButton
