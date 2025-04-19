export function ExperienceForm({handleExperienceChange, experienceInfo}) {
    return (
        <form className="form" action="">
            <br />
            <h1 className="form-title">Experience</h1>
            <br />
            <p className="form-instruction">Let's talk previous Jobs</p>
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="job">Job Title</label>
                <input onChange={handleExperienceChange} type="text" id="job" name="job" value={experienceInfo.job} />
              </div>
              <div className="stack two-wide">
                <label htmlFor="company">Company Name</label>
                <input onChange={handleExperienceChange} type="text" id="company" name="company" value={experienceInfo.company}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="city">City</label>
                <input onChange={handleExperienceChange} type="text" id="city" name="city" value={experienceInfo.city}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="state">State or Province</label>
                <input onChange={handleExperienceChange} type="text" id="state" name="state" value={experienceInfo.state}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="startMonth">Start Month</label>
                <input onChange={handleExperienceChange} type="text" maxLength="9" id="startMonth" name="startMonth" value={experienceInfo.startMonth}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="startYear">Start Year</label>
                <input onChange={handleExperienceChange} type="text" maxLength="4" id="startYear" name="startYear" value={experienceInfo.startYear}/>
              </div>
            </div>
            <br />
            <br />
            <div className="form-container">
              <div className="stack two-wide">
                <label htmlFor="endMonth">End Month</label>
                <input onChange={handleExperienceChange} type="text" maxLength="9" id="endMonth" name="endMonth" value={experienceInfo.endMonth}/>
              </div>
              <div className="stack two-wide">
                <label htmlFor="startYear">End Year</label>
                <input onChange={handleExperienceChange} type="text" maxLength="4" id="endYear" name="endYear" value={experienceInfo.endYear}/>
              </div>
            </div>
            
          </form>
    )
}