
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"

const TeamMembers = ({ selectedTeam, employees, handleEmployeeCardClick }) => {
    return(
    employees.map((e) =>
    (<div key={e.id} id={e.id} className={e.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'} onClick={handleEmployeeCardClick}>
        {(e.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> : <img src={femaleProfile} className="card-img-top" />}
        <div className="card-body">
            <h5 className="card-title">Full name: {e.fullName}</h5>
            <p className="card-text">Designation: {e.designation}</p>
        </div>
    </div>)
    ))
}

export default TeamMembers