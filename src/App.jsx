import { useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Landing } from './components/landing'
import { Start } from './components/start'
import { ContactForm } from './components/contact-form'
import { EducationForm } from './components/education-form'
import { ExperienceForm } from './components/experience-form'
import { Preview } from './components/preview'

function App() {
  const [activePage, setActivePage] = useState("landing")
  function handleCategoryClick(e) {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    setCategory(e.target.textContent)
  }
  function removeBuildButtons() {
    const buttons = document.querySelectorAll(".build")
    buttons.forEach(button => button.remove())
  }

  const [category, setCategory] = useState("")

  const [contactInfo, setContactInfo] = useState({
    fname: "",
    lname: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: ""
  })

  function handleContactChange(e) {
    let info = {...contactInfo}
    info[e.target.name] = e.target.value
    setContactInfo(info)
  }

  const [educationInfo, setEducationInfo] = useState({
    name: "",
    location: "",
    degree: "",
    field: "",
    month: "",
    year: ""
  })

  function handleEducationChange(e) {
    let info = {...educationInfo}
    info[e.target.name] = e.target.value
    setEducationInfo(info)
  }

  const [experienceInfo, setExperienceInfo] = useState({
    job: "",
    company: "",
    city: "",
    state: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: ""
  })

  function handleExperienceChange(e) {
    let info = {...experienceInfo}
    info[e.target.name] = e.target.value
    setExperienceInfo(info)
  }


  return (
    <>
      {/* Header */}
      <nav className="header-nav">
          <h1>
              Simple CV Builder
          </h1>
          <Button
          text='Build my CV'
          className="build"
          onClick={() => setActivePage("start") & removeBuildButtons() & setCategory("Contact")}
          />
      </nav>
      <div className="page-container">
        {/* Landing/Start Logic */}
        {activePage === "landing" && (
          <Landing handleBuildClick={() => setActivePage("start") & removeBuildButtons() & setCategory("Contact")} />
        )}
        {activePage === "start" && (
          <Start
          onClick={handleCategoryClick}
          />
        )}

        {/* Category Logic */}
        {category === "Contact" && (
          <ContactForm
          handleContactChange={handleContactChange}
          contactInfo={contactInfo}
          />
        )}
        {category === "Education" && (
          <EducationForm
          handleEducationChange={handleEducationChange}
          educationInfo={educationInfo}
          />
        )}
        {category === "Practical Experience" && (
          <ExperienceForm
          handleExperienceChange={handleExperienceChange}
          experienceInfo={experienceInfo}
          />
        )}
        {category === "Preview" && (
          <Preview
          contactInfo={contactInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          />
        )}
        </div>
      


      {/* Footer */}
      <footer>
          <p>Copyright</p>
      </footer>
    </>
  )
}

export default App
