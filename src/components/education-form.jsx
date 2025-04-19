export function EducationForm({handleEducationChange, educationInfo}) {
    return (
        <form className="form" action="">
            <br />
            <h1 className="form-title">Education</h1>
            <br />
            <p className="form-instruction">Where did you attend college or university?</p>
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="name">School Name</label>
                <input onChange={handleEducationChange} type="text" id="name" name="name" value={educationInfo.name} />
              </div>
              <div className="stack two-wide">
                <label htmlFor="location">School Location</label>
                <input onChange={handleEducationChange} type="text" id="location" name="location" value={educationInfo.location}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="degree">Degree or Program</label>
                <input onChange={handleEducationChange} type="text" id="degree" name="degree" value={educationInfo.degree}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="field">Field of Study</label>
                <input onChange={handleEducationChange} type="text" id="field" name="field" value={educationInfo.field}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="month">Graduation Month</label>
                <input onChange={handleEducationChange} type="text" maxLength="9" id="month" name="month" value={educationInfo.month}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="year">Graduation Year</label>
                <input onChange={handleEducationChange} type="text" maxLength="4" id="year" name="year" value={educationInfo.year}/>
              </div>
            </div>
            
          </form>
    )
}