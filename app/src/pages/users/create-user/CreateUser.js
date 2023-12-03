import React, { useState } from 'react';
import "./CreateUser.css";

import Navbar from '../../../components/navbar/Navbar';

const CreateUser = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [avatar, setAvatar] = useState("example.png");
    const [domain, setDomain] = useState("");
    const [available, setAvailable] = useState(true);

    const handleCreateUser = async (e) => {
        e.preventDefault();

        try {
            fetch(
                "http://localhost:5000/api/users",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: firstname,
                        last_name: lastname,
                        email,
                        gender,
                        avatar,
                        domain,
                        available,
                    }),
                }
            );

            // const newUser = await response.json();
            // console.log(newUser.data);

            setFirstName("");
            setLastName("");
            setEmail("");
            setGender("");
            setAvatar("");
            setDomain("");
            setAvailable(true);
        } catch (error) {
            console.log("Error : ", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='main-area'>
                <input
                    type='text'
                    placeholder='Enter First Name'
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Enter Last Name'
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <span>Gender:</span>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <input
                    type='text'
                    placeholder='Enter Avatar URL'
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <div>
                    <span>Domain:</span>
                    <select value={domain} onChange={(e) => setDomain(e.target.value)}>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div>
                    <span>Available:</span>
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                </div>
                <button onClick={handleCreateUser}>Submit</button>
            </div>
        </div>
    );
};

export default CreateUser;
