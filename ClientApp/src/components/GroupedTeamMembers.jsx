import Employees from "./Employees";
import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    function groupTeamMembers() {
        const teams = [];
        var teamA = {
            team: 'Team A', members: employees.filter(e => e.teamName === 'Team A'), isCollapsed: selectedTeam === 'Team A' ? false : true
        }
        teams.push(teamA);
        var teamBmembers = {
            team: 'Team B', members: employees.filter(e => e.teamName === 'Team B'), isCollapsed: selectedTeam === 'Team B' ? false : true
        }
        teams.push(teamBmembers);
        var teamCmembers = {
            team: 'Team C', members: employees.filter(e => e.teamName === 'Team C'), isCollapsed: selectedTeam === 'Team C' ? false : true
        }
        teams.push(teamCmembers);
        var teamDmembers = {
            team: 'Team D', members: employees.filter(e => e.teamName === 'Team D'), isCollapsed: selectedTeam === 'Team D' ? false : true
        }
        teams.push(teamDmembers);
        return teams;
    }

    function handleTeamClick(event) {
        var transformedGroupData = groupedEmployees.map((gEmployees) => gEmployees.team === event.currentTarget.id ?
            { ...gEmployees, isCollapsed: !gEmployees.isCollapsed } : gEmployees);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map(gEmployees => {
                    return(
                        < div key={gEmployees.team} className="mt-2 card" >
                            <h4 id={gEmployees.team} className="card-header" onClick={handleTeamClick }>Team name: {gEmployees.team}</h4>
                            <div id={"Employee_" + gEmployees.team} className={gEmployees.isCollapsed === true ? "collapse" : ""} >
                            <hr/>
                                {
                                    gEmployees.members.map(m => {
                                        return (
                                            <div key={ m.teamName} className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {m.fullName }</span>
                                                </h5>
                                                <p>Designation: {m.designation }</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) })
            }
        </main>
    )
}
export default GroupedTeamMembers;