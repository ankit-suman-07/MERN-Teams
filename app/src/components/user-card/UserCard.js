import React from 'react';
import "./UserCard.css";

import DelIcon from "../../assets/delete.png";
import EditIcon from "../../assets/pen.png";

const UserCard = ({ user, btn = false }) => {
    return (
        <div className='user-card' >
            <div className='user-card-top' >
                <img src={EditIcon} alt='edit-icon' />
                {
                    btn && <button>Add To Team</button>
                }

                <img src={DelIcon} alt='del-icon' />
            </div>

            <div className='user-card-avatar' >
                <img src={user.avatar} />
            </div>
            <div className='user-card-detail-main' >
                <div className='user-card-name' >
                    {user.first_name} {user.last_name}
                </div>
                <div className='user-card-details' >
                    <div className='user-detail' >
                        <span className='detail-label' >Gender : </span><span>{user.gender}</span>
                    </div>
                    <div className='user-detail' >
                        <span className='detail-label' >Domain : </span><span>{user.domain}</span>
                    </div>
                    <div className='user-detail' >
                        <span className='detail-label' >Availability : </span><span>{user.available ? "Available" : "Not Available"}</span>
                    </div>
                </div>
                <div className='user-card-email' >
                    {user.email}
                </div>
            </div>
        </div>
    )
}

export default UserCard