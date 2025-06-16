import './styles/contact.css'
import useObserver from '../hooks/useObserver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Contact(){
  useObserver();
  
  return(
    <section className="contact-container hidden" id="contact">

      	<h1 className='contact-title'>Contact</h1>
        <h4 className='secondary-title'>Where to find me</h4>

        <section className='card-container'>

        <article className='contact-card'>
          <img src="../assets/github-icon.png" alt="github-icon" className='contact-icon'/>
          <a href="https://github.com/Jagge1" className='icon-link' target='_blank'>My Github <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </article>

        <article className='contact-card'>
          <img src="../assets/mail-icon.png" alt="mail-icon" className='contact-icon'/>
          <a href="mailto:hellgrenjacob@hotmail.com" className='icon-link' target='_blank'>My Email <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </article>

        <article className='contact-card'>
          <img src="../assets/linkedin-icon.png" alt="linkedin-icon" className='contact-icon'/>
          <a href="https://se.linkedin.com/in/jacob-hellgren-a88967325?trk=people-guest_people_search-card" className='icon-link' target='_blank'>My LinkedIn <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span></a>
        </article>

        </section>

            <a href="#header"><FontAwesomeIcon icon={faArrowUp} className='scroll-to-top'/></a>
            <p className='scroll-to-top-text'>Scroll to top</p>
    </section>
  )
}