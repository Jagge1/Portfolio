import './styles/projects.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects(){
  return(
    <section className='project-container' id='projects'>
      <h1 className='project-section-title'>My Projects</h1>

      <section className='projects'>

      <article className='project-card'>
        <img src="../assets/house18-logo.png" alt="house18-logo" className='project-img' id='house18-icon'/>
        {/*<h4 className='project-card-title'>HOUSE 18</h4>*/}

        <p className='project-description'>
          House 18 is a fullstack web application built as part of a university
          project during the course Full Stack Development at Kristianstad University.
          The app simulates a modern clothing store with user authentication, a responsive shopping
          exprerience and admin product management.
        </p>

        <a href="https://github.com/nickem00/house-18" className='project-link' target='_blank'>View project <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>
        <a href="https://house-18.vercel.app/" className='project-link' target='_blank'>View website <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>

      </article>

      <article className='project-card'>
        <img src="../assets/solace-logo.png" alt="solace-logo" className='project-img' id='solace-icon'/>
        {/*<h4 className='project-card-title'>SOLACE</h4>*/}
        
        <p className='project-description' id='top-paragraph'>
          This desktop application is designed to help people deal with stress and anxiety by
          allowing them to track their mood and stress levels during a period of time.
        </p>
        <br />
        <p className='project-description' id='bottom-paragraph'>
          The application was created during the course Agile Development and was meant as an
          exercise to learn agile development and Scrum
        </p>
        
        <a href="https://github.com/HugNil/Solace" className='project-link' target='_blank'>View project <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>

      </article>

      </section>
    </section>
  )
}