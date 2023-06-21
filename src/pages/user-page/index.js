import React, { useState } from 'react';
import UserContent from './UserContent';
import NavBar from './NavBar';


const UserPage = () => {
    const [selectedOption, setSelectedOption] = useState("Patients");

    return (
        <div className='overflow-x-hidden'>
            {/* Left Menu */}
            <NavBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

            {/* Right Content */}
            <div className="ml-72 bg-white p-4">
                <UserContent />
            </div>
        </div>
    );
};

export default UserPage;
