import React, { useEffect, useState } from "react";

const FilterDept = () => {
  const [dept, setDept] = useState("MCA");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dashboard-alpha-nine-93.vercel.app/dept/${dept}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchData();
  }, [dept]);

  const handleChange = (e) => {
    setDept(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6">
        <label
          htmlFor="department"
          className="text-gray-800 font-semibold mr-3 text-lg"
        >
          Department:
        </label>
        <select
          id="department"
          name="department"
          value={dept}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
          <option value="IT">IT</option>
        </select>
      </div>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        {dept} Department Employees
      </h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Department</th>
              <th className="py-3 px-6 text-left">Salary</th>
              <th className="py-3 px-6 text-left">Reg Date</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-6">{user.id}</td>
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.department}</td>
                  <td className="py-3 px-6">{user.salary}</td>
                  <td className="py-3 px-6">{user.regdate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 px-6 text-center text-gray-500 italic"
                >
                  No employees found in {dept} department
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterDept;
