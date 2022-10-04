import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
      return <div>Loading ...</div>
    }

    return (
      isAuthenticated && (
        <div>
          <h2 className='Name'>{user.name}</h2>
          <img src={user.picture} alt={user.name} />
          <p className='Name'>{user.email}</p>
        </div>
      )
    )
  }

  export default Profile
