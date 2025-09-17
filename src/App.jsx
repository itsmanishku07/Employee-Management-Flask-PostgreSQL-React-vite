import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllEmployees from './Components/AllEmployees';
import FilterDept from './Components/FilterDept';
import Header from './Components/Header';
import CreateEmployee from './Components/CreateEmployee';
import DepartmentInfo from './Components/DepartmentInfo';
import Login from './Components/Login';
import Home from './Components/Home';
import Blog from './Components/Blog';

const App = () => {
  return (
    <BrowserRouter>
      
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/all" element={<AllEmployees />} /> 
          <Route path="/insert" element={<CreateEmployee />} /> 
          <Route path="/filter" element={<FilterDept />} />
          <Route path="/department" element={<DepartmentInfo />} />
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
