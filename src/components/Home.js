import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-2xl'>Home compo for {user?.displayName}</h2>
        </div>
    );
};

export default Home;