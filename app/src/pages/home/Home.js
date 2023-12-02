import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }

    }

    const nextPage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${page}`);
                const users = await response.json();
                console.log(users);
                setUsers(users.data);
                setLoading(false);
            } catch (e) {
                console.log("Error : ", e);
                setLoading(false);
            }
        };

        fetchUsers();
    }, [page]);

    return (
        <div>
            <Navbar />
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    users.map((user) => (
                        <div key={user.id}>
                            {user.first_name}
                        </div>
                    ))
                )}
            </div>
            <button onClick={prevPage} >-</button>
            {
                page
            }
            <button onClick={nextPage} >+</button>
        </div>
    );

}

export default Home