import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Teams = () => {
    return (
        <div>
            <Navbar />
            <div className='main-area' >
                <div className='create-teams' >
                    <Link to='/teams/create' className='team-link' >
                        Create Team
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Teams