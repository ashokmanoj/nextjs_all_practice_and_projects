import React from 'react'

const Profile = async({params}:{params:{profile:string}}) => {

     const {profile} = await params
  return (
   
    <div>
        <h1>User Profile {profile}</h1>
    </div>
  )
}

export default Profile