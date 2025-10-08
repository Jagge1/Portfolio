import './styles/about.css'
import useObserver from '../hooks/useObserver'
import jsLogo from '../../assets/js-logo.png'
import cssLogo from '../../assets/css-logo.png'
import htmlLogo from '../../assets/html-logo.png'
import firebaseLogo from '../../assets/firebase-logo.png'
import gitLogo from '../../assets/git-logo.png'
import javaLogo from '../../assets/java-logo.png'
import mongoCompassLogo from '../../assets/mongodb-compass-logo.png'
import mysqlLogo from '../../assets/mysql-logo.png'
import nodeLogo from '../../assets/node-js-logo.png'
import pythonLogo from '../../assets/python-logo.png'
import reactLogo from '../../assets/react-logo.png'

export default function About(){
  useObserver()
  
  return (
    <section className='about-container hidden' id='about'>
      <h1 className='about-me-title'>About me</h1>

        <article className='about-description-container'>

          <p className='about-me-description'>
          I’m currently a Third-year student at Kristianstad University, studying to become a fullstack developer.
          I’m passionate about learning and applying new technologies, and I’m actively looking for opportunities
          to collaborate, grow, and contribute as a developer. If you are looking to collaborate
          don't hesitate to contact me.
        </p>

        </article>

      <h3 className='stack-title'>Technologies</h3>

      <article className='stack-container'>
      
      <article className='tech-icon-container'>
        <img src={jsLogo} className='tech-icon' alt="" />
        <p className='icon-text'>JavaScript</p>
      </article>

      <article className='tech-icon-container'>
        <img src={htmlLogo} className='tech-icon' alt="" />
        <p className='icon-text'>HTML5</p>
      </article>

        <article className='tech-icon-container'>
          <img src={cssLogo} className='tech-icon' alt="" />
          <p className='icon-text'>CSS3</p>
        </article>

        <article className='tech-icon-container'>
          <img src={firebaseLogo} className='tech-icon' alt="" />
          <p className='icon-text'>Firebase</p>
        </article>

        <article className='tech-icon-container'>
          <img src={gitLogo} className='tech-icon' alt="" />
          <p className='icon-text'>Git</p>
        </article>

        <article className='tech-icon-container'>
          <img src={javaLogo} className='tech-icon' alt="" />
          <p className='icon-text'>Java</p>
        </article>

        <article className='tech-icon-container'>
          <img src={mongoCompassLogo} className='tech-icon' alt="" />
          <p className='icon-text'>MongoDb</p>
        </article>

        <article className='tech-icon-container'>
          <img src={mysqlLogo} className='tech-icon' alt="" />
          <p className='icon-text'>MySQL</p>
        </article>

        <article className='tech-icon-container'>
          <img src={nodeLogo} className='tech-icon' alt="" />
          <p className='icon-text'>NodeJs</p>
        </article>

        <article className='tech-icon-container'>
          <img src={pythonLogo} className='tech-icon' alt="" />
          <p className='icon-text'>Python</p>
        </article>

        <article className='tech-icon-container'>
          <img src={reactLogo} className='tech-icon' alt="" />
          <p className='icon-text'>React</p>
        </article>

      </article>

    </section>
  )
}