import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from '@mui/material'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </Button>
  )
}

export default LogoutButton
