import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const DepartmentInfo = () => {
  const [user, setUser] = useState([]);

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dashboard-alpha-nine-93.vercel.app/groupdepartment");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log("Error " + err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Department Overview
      </h2>

      <div className="w-full max-w-5xl mb-10">
        {user.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Total Salary</th>
                <th className="py-3 px-6 text-left">Average Salary</th>
                <th className="py-3 px-6 text-left">Employees</th>
              </tr>
            </thead>
            <tbody>
              {user.map((val, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-6 font-semibold text-gray-700">
                    {val.department}
                  </td>
                  <td className="py-3 px-6 text-green-600 font-bold">
                    ₹{val.totalSalary}
                  </td>
                  <td className="py-3 px-6 text-purple-600 font-bold">
                    ₹{val.avgsalary}
                  </td>
                  <td className="py-3 px-6">{val.employees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex w-full items-center justify-center gap-43 mt-15 flex-wrap">

        <ResponsiveContainer width="50%" height={300}>
          <BarChart data={user}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="employees" fill="#3B82F6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="w-full max-w-md">
        
          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                data={user}
                dataKey="employees"
                nameKey="department"
                cx="50%"
                cy="50%"
                outerRadius={110}
                fill="#8884d8"
                label
              >
                {user.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        
      </div>
    </div>
  );
};

export default DepartmentInfo;
