import React from 'react';
import "./DeleteUser.css";

import { useNavigate, useParams } from 'react-router-dom';

const DeleteUser = () => {
    const { id } = useParams();

    const deleteUser = async (e, noteId) => {
        e.stopPropagation();
        try {
            await fetch(
                `http://localhost:5000/api/users/${id}`,
                {
                    method: "DELETE",
                }
            );

        } catch (error) {
            console.log("Error : ", error);
        }

    }
    return (
        <div>
            Are you sure you want to delete this user?
            <button onClick={deleteUser} >Delete</button>
            <button>Cancel</button>
        </div>
    )
}

export default DeleteUser