import React, { useState } from "react";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dashboard-alpha-nine-93.vercel.app/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.msg || "User created");
      setFormData({
        name: "",
        email: "",
        department: "",
        salary: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create user: " + err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Employee
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email", "department", "salary", "password"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder={`Enter ${field}`}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
