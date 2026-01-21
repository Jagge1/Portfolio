import './styles/projects.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useObserver from '../hooks/useObserver';
import house18Logo from '../assets/house18-logo.png'
import solaceLogo from '../assets/solace-logo.png'
import tryggaLogo from '../assets/trygga-tillsammans.png'

export default function Projects(){
  useObserver();
  
  return(
    <section className='project-container hidden' id='projects'>
      <h1 className='project-section-title'>My Projects</h1>

      <section className='projects'>

      <article className='project-card'>
        <img src={house18Logo} alt="house18-logo" className='project-img' id='house18-icon'/>
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
        <img src={solaceLogo} alt="solace-logo" className='project-img' id='solace-icon'/>
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

            <article className='project-card'>
        <img src={tryggaLogo} alt="trygga-logo" className='project-img' id='trygga-icon'/>
        {/*<h4 className='project-card-title'>Android Project</h4>*/}

        <p className='project-description' id='top-paragraph'>
          "Trygga tillsammans" is an android application built during the Android development course at Kristianstad University in collaboration with Combitech.
        </p>
        <br />
        <p className='project-description' id='bottom-paragraph'>
          The application aims to educate the public, strengthening confidence and understanding of Sweden’s total defense
        </p>

         <a href="https://www.linkedin.com/feed/update/urn:li:activity:7397155490373357568/" className='project-link' target='_blank'>View project <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>

      </article>

      </section>
    </section>
  )
}