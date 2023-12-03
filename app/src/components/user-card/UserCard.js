import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='user-card' >
            {user.first_name}
        </div>
    )
}

export default UserCard