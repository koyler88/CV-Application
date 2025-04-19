export function Preview({contactInfo, educationInfo, experienceInfo}) {
    return (
        <div className="preview-container">
            <h1 className="preview-name">{contactInfo.fname} {contactInfo.lname}</h1>
            <br />
            <div className="info-container">
                <p className="personal-info">{contactInfo.phone}</p>
                <li></li>
                <p className="personal-info">{contactInfo.email}</p>
                <li></li>
                <p className="personal-info">{contactInfo.city}, {contactInfo.state} {contactInfo.zipcode}</p>
            </div>
            <br />
            <p className="bottomline"></p>
            <br />

            <h2 className="section-title">Experience</h2>
            <br />
            <h5 className="job-info">{experienceInfo.job}</h5>
            <h3>{experienceInfo.company}</h3>
            <h5 className="job-info"> {experienceInfo.startMonth} {experienceInfo.startYear} - {experienceInfo.endMonth} {experienceInfo.endYear}</h5>
            <br />
            <br />
            <br />

            <h2 className="section-title">Education</h2>
            <p className="education-info">Completed coursework towards {educationInfo.degree} in {educationInfo.field}</p>

            <h3>{educationInfo.name}, {educationInfo.location}</h3>
            <p className="education-info">{educationInfo.month} {educationInfo.year}</p>
        </div>
    )
}