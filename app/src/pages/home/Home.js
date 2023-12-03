import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            console.log("search item : ", searchTerm);
            try {
                const response = await fetch(`http://localhost:5000/api/users/${page}?searchTerm=${searchTerm}`);
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
    }, [page, searchTerm]);

    return (
        <div>
            <Navbar />
            <div>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    users.map((user) => (
                        <div key={user.id}>
                            {user.first_name} - {user.last_name}
                        </div>
                    ))
                )}
            </div>
            <button onClick={prevPage}>-</button>
            {page}
            <button onClick={nextPage}>+</button>
        </div>
    );
};

export default Home;
