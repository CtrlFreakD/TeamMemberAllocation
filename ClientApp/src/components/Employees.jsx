
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"

const Employees = ({ selectedTeam, employees, handleEmployeeCardClick, handleTeamSelectionChange }) => {
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">               
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange }>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
                    <div className="card-collection">
                        {employees.map((e) =>
                        (<div key={e.id } id={e.id} className={e.teamName === selectedTeam ?'card m-2 standout':'card m-2'} onClick={handleEmployeeCardClick}>
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