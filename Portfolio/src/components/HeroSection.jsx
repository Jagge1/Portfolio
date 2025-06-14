import './styles/heroSection.css'
import useObserver from '../hooks/useObserver'

export default function HeroSection(){
  useObserver();

  return(
    <section className='hero-section-container hidden'>
      <img src="../assets/Portfolio-Portrait-2.png" alt="Illustration portrait" className="portrait"/>

      <article className='description-container'>
        <p className='title'>Hi, my name is...</p>
        <h2 className='name'>Jacob Hellgren.</h2>
        <h2 className='my-role'>I'm a fullstack developer.</h2>
        
        <p className='description'>
          Based in Sweden
        </p>

        <a href="" className='resume-dwnld'>Download my resume</a>

      </article>

    </section>
  
  )
}