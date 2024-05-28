import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react"

function App () {
    Component.displayName = App.name;
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "Team A"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "Team C"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "Team D"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "Team B"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "Team B"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "Team B"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "Team A"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "Team C"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "Team C"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "Team D"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "Team D"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "Team D"
    }])

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team B');

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees]);

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handleTeamSelectionChange(event) {
        //console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) {
        const filteredEmployees = employees.map(e => e.id === parseInt(event.currentTarget.id) ? (e.teamName === selectedTeam
            ? { ...e, teamName: '' } : { ...e, teamName: selectedTeam }) : e);
        setEmployees(filteredEmployees);
    }

  //render() {
      return (
        <Layout>
                  <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter(e => e.teamName === selectedTeam).length} />
                  <Routes>
                    <Route path="/" element={
                      <Employees selectedTeam={selectedTeam} employees={employees}
                          handleTeamSelectionChange={handleTeamSelectionChange} handleEmployeeCardClick={handleEmployeeCardClick} />}>
                    </Route>
                  <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers setTeam={setTeam} employees={employees} selectedTeam={selectedTeam} />}></Route>
                  <Route path="*" element={<NotFound /> }></Route>
                  </Routes>
                  <Footer />
         </Layout>
  
    );
   // }
}
export default App;
