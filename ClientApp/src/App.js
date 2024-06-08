import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
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
   
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('teams');
        const data = await response.json();
        setEmployees(data);
    };

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team B');

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) {
        const filteredEmployees = employees.map(e => e.id === parseInt(event.currentTarget.id) ? (e.teamName === selectedTeam
            ? { ...e, teamName: '' } : { ...e, teamName: selectedTeam }) : e);
        setEmployees(filteredEmployees);
        fetch('teams', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(filteredEmployees)
        });
    }

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
}
export default App;
