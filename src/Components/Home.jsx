import React, { useEffect, useState } from "react";
import LoginRequired from "./LoginReq";
const Home = () => {
    const islogin = localStorage.getItem("isLogin") === "true";
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{

                const res = await fetch("https://dashboard-alpha-nine-93.vercel.app/forhome")
                const data = await res.json()
                console.log(data);
                setData(data)
            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {islogin ? (
                <div className="min-h-screen bg-gray-100 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome to Employee Dashboard
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Manage employees, departments, and salary information easily.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">Total Employees</h2>
                            <p className="text-3xl font-bold mt-2">{data.totalEmployee}</p>
                        </div>

                        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">Avrage Salary</h2>
                            <p className="text-3xl font-bold mt-2">{data.avgsalary}</p>
                        </div>

                        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">Total Salary</h2>
                            <p className="text-3xl font-bold mt-2">{data.totalSalary}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                        <div className="flex flex-wrap gap-4">
                             <a
                                href="/all"
                                className="bg-red-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                All Employees
                            </a>
                            <a
                                href="/insert"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                Add Employee
                            </a>
                            <a
                                href="/update"
                                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
                            >
                                Update Employee
                            </a>
                            <a
                                href="/filter"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                            >
                                Filter Records
                            </a>
                            <a
                                href="/department"
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition"
                            >
                                View Departments
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-center font-bold text-2xl mt-20 text-red-500">
                    <LoginRequired/>
                </h1>
            )}
        </div>
    );
};

export default Home;
