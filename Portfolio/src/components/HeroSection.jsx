import './styles/heroSection.css'
import useObserver from '../hooks/useObserver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import portrait from '../assets/Portfolio-Portrait-2.png';

export default function HeroSection(){
  useObserver();

  return(
    <section className='hero-section-container hidden'>
      <img src={portrait} alt="Illustration portrait" className="portrait"/>

      <article className='description-container'>
        <p className='title'>Hi, my name is...</p>
        <h2 className='name'>Jacob Hellgren.</h2>
        <h2 className='my-role'>I'm a fullstack developer.</h2>
        
        <article className='location-container'>

          <FontAwesomeIcon icon={faLocationDot} className='location-pin'/>
          <p className='description'>
            Based in Sweden
          </p>          
        </article>


        <a href="/Jacob_Hellgren_-_.pdf" download className='resume-dwnld'>Download my resume</a>

      </article>

    </section>
  
  )
}