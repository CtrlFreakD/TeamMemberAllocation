
import Teams from "./Teams"
import TeamMembers from "./TeamMembers"

const Employees = ({ selectedTeam, employees, handleEmployeeCardClick, handleTeamSelectionChange }) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">               
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                    <div className="card-collection">
                        <TeamMembers selectedTeam={selectedTeam} employees={employees} handleEmployeeCardClick={handleEmployeeCardClick}/>
                    </div>
                </div>
            </div>
        </main>
        )
}

export default Employees