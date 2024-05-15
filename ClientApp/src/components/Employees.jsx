﻿import {useState} from "react"
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"

const Employees = () => {
    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamD"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
        }])
   
        const [selectedTeam, setTeam] = useState('TeamB');

    function handleTeamSelectionChange(event){
        //console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) {
        const filteredEmployees = employees.map(e => e.id === parseInt(event.currentTarget.id) ? (e.teamName === selectedTeam)
            ? { ...e, teamName: '' } : { ...e, teamName: selectedTeam } :e);
        setEmployees(filteredEmployees);
    }

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">               
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange }>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                    <div className="card-collection">
                        {employees.map((e) =>
                        (<div id={e.id} className={e.teamName === selectedTeam ?'card m-2 standout':'card m-2'} onClick={handleEmployeeCardClick}>
                {(e.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> : <img src={femaleProfile} className="card-img-top" />}
                    <div className="card-body">
                    <h5 className="card-title">Full name: {e.fullName}</h5>
                    <p className="card-text">Designation: {e.designation}</p>
                    </div>               
                    </div>)
                        )}
                    </div>
                </div>
            </div>
        </main>
        )
}

export default Employees