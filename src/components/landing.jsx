import resume from '../assets/resume.jpg'
import { Button } from './button'

export function Landing({handleBuildClick}) {
    return (
        <section className="landing">
          <h2>
          Welcome to your free CV Builder!
          </h2>
          <p className="intro">
          Create a professional CV in less than 15 minutes!
          </p>
          <Button
          text='Build my CV'
          className="build"
          onClick={handleBuildClick}
          />
          <img className="resume-img" src={resume} alt="closeup-candidate-giving-his-cv-while-applying-job-office" />
        </section>
    )
}