import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import getUserData from '../../util/db/userQueries';

function UserContent() {

    const [searchPhrase, setSearchPhrase] = useState("");
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function checkData() {
            const data = await getUserData();
            setUserData(data);
        }
        checkData();
    }, []);

    const isFilteredRecord = (userRecord) => (userRecord.name.toUpperCase().includes(searchPhrase.toUpperCase()) || userRecord.doctor.name.toUpperCase().includes(searchPhrase.toUpperCase()));

    return (
        <div className="p-4 overflow-hidden">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <button className=" text-sky-500">Export CSV</button>
                    <button className=" bg-sky-500 px-4 py-2 text-white rounded-md">Add Patient</button>
                </div>
                <button className="text-black">Log out</button>
            </div>
            <div className="mt-10">
                <div className="flex gap-2 items-center min-w-full px-2 h-10 bg-slate-100">
                    <Search />
                    <input
                        value={searchPhrase}
                        className="w-full bg-inherit focus-visible:outline-none"
                        placeholder="Search by patient name or doctor name"
                        onChange={(e) => { setSearchPhrase(e.target.value) }}
                    />
                </div>
                <table className="min-w-full mt-5">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left ">Name</th>
                            <th className="py-2 px-4 text-left">Doctor Assigned</th>
                            <th className="py-2 px-4 text-left">Last Session</th>
                            <th className="py-2 px-4 text-left">Total Sessions</th>
                        </tr>
                    </thead>
                    <tbody className=" overflow-y-scroll">
                        {userData.filter(isFilteredRecord).map((item, index) => (
                            <tr key={index} className={(index % 2 === 1) ? "bg-sky-50" : ""}>
                                <td className="py-2 px-4">{item.name}</td>
                                <td className="py-2 px-4">{item.doctor.name}</td>
                                <td className="py-2 px-4">{item.lastSession}</td>
                                <td className="py-2 px-4">{item.sessionCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default UserContent;