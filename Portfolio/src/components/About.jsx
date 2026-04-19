import './styles/about.css'
import useObserver from '../hooks/useObserver'
import jsLogo from '../assets/js-logo.png'
import cssLogo from '../assets/css-logo.png'
import htmlLogo from '../assets/html-logo.png'
import firebaseLogo from '../assets/firebase-logo.png'
import gitLogo from '../assets/git-logo.png'
import javaLogo from '../assets/java-logo.png'
import mongoCompassLogo from '../assets/mongodb-compass-logo.png'
import mysqlLogo from '../assets/mysql-logo.png'
import nodeLogo from '../assets/node-js-logo.png'
import pythonLogo from '../assets/python-logo.png'
import reactLogo from '../assets/react-logo.png'
import kotlinLogo from '../assets/kotlin-logo.png'
import postgresqlLlogo from '../assets/Postgresql-logo.png'
import fastapiLogo from '../assets/fastapi-logo.png'
import expressLogo from '../assets/expressJs-logo.png'
import unitTestLogo from '../assets/unit-test-logo.png'
import sqlAlchemyLogo from '../assets/sqlalchemy-logo.png'
import androidStudioLogo from '../assets/android-studio-logo.png'
import dockerLogo from '../assets/docker-logo.png'

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

      <section className='stack-categories-container'>
        <article className='stack-container' id='programming-languages'>
          <h4 className='stack-category-title'>Programming Languages</h4>
          <div className='tech-grid'>
            <article className='tech-icon-container'>
              <img src={jsLogo} className='tech-icon' alt="" id='js-logo'/>
              <p className='icon-text'>JavaScript</p>
            </article>
            <article className='tech-icon-container'>
              <img src={javaLogo} className='tech-icon' alt="" id='java-logo'/>
              <p className='icon-text'>Java</p>
            </article>

            <article className='tech-icon-container'>
              <img src={pythonLogo} className='tech-icon' alt="" id='python-logo'/>
              <p className='icon-text'>Python</p>
            </article>

            <article className='tech-icon-container'>
              <img src={kotlinLogo} className='tech-icon' alt="" id='kotlin-logo'/>
              <p className='icon-text'>Kotlin</p>
            </article>
          </div>
        </article>

        <article className='stack-container' id='databases'>
          <h4 className='stack-category-title'>Databases</h4>
          <div className='tech-grid'>
            <article className='tech-icon-container'>
              <img src={firebaseLogo} className='tech-icon' alt="" id='firebase-logo'/>
              <p className='icon-text'>Firebase</p>
            </article>

            <article className='tech-icon-container'>
              <img src={mongoCompassLogo} className='tech-icon' alt="" id='mongo-logo'/>
              <p className='icon-text'>MongoDb</p>
            </article>

            <article className='tech-icon-container'>
              <img src={mysqlLogo} className='tech-icon' alt="" id='sql-logo'/>
              <p className='icon-text'>MySQL</p>
            </article>

            <article className='tech-icon-container'>
              <img src={postgresqlLlogo} className='tech-icon' alt="" id='postgresql-logo'/>
              <p className='icon-text'>PostgreSQL</p>
            </article>

            <article className='tech-icon-container'>
              <img src={sqlAlchemyLogo} className='tech-icon' alt="" id='sqlalechemy-logo'/>
              <p className='icon-text'>SQLAlchemy</p>
            </article>
          </div>
        </article>

        <article className='stack-container' id='frontend'>
          <h4 className='stack-category-title'>Frontend</h4>
          <div className='tech-grid'>
            <article className='tech-icon-container'>
              <img src={htmlLogo} className='tech-icon' alt="" id='html-logo'/>
              <p className='icon-text'>HTML5</p>
            </article>

            <article className='tech-icon-container'>
              <img src={cssLogo} className='tech-icon' alt="" id='css-logo'/>
              <p className='icon-text'>CSS3</p>
            </article>

            <article className='tech-icon-container'>
              <img src={reactLogo} className='tech-icon' alt=""/>
              <p className='icon-text'>React</p>
            </article>
          </div>
        </article>

        <article className='stack-container' id='backend'>
          <h4 className='stack-category-title'>Backend</h4>
          <div className='tech-grid'>
            <article className='tech-icon-container'>
              <img src={nodeLogo} className='tech-icon' alt="" id='node-logo'/>
              <p className='icon-text'>NodeJs</p>
            </article>
            <article className='tech-icon-container'>
              <img src={expressLogo} className='tech-icon' alt="" id='express-logo'/>
              <p className='icon-text'>ExpressJs</p>
            </article>

            <article className='tech-icon-container'>
              <img src={fastapiLogo} className='tech-icon' alt="" id='fastapi-logo'/>
              <p className='icon-text'>FastAPI</p>
            </article>
          </div>
        </article>

        <article className='stack-container' id='other'>
          <h4 className='stack-category-title'>Other</h4>
          <div className='tech-grid'>
            <article className='tech-icon-container'>
              <img src={gitLogo} className='tech-icon' alt="" id='git-logo'/>
              <p className='icon-text'>Git</p>
            </article>

            <article className='tech-icon-container'>
              <img src={unitTestLogo} className='tech-icon' alt="" id='unittest-logo'/>
              <p className='icon-text'>Unit testing</p>
            </article>

            <article className='tech-icon-container'>
              <img src={androidStudioLogo} className='tech-icon' alt="" id='android-logo'/>
              <p className='icon-text'>Android Development</p>
            </article>

            <article className='tech-icon-container'>
              <img src={dockerLogo} className='tech-icon' alt="" id='docker-logo'/>
              <p className='icon-text'>Docker</p>
            </article>
          </div>
        </article>
      </section>
    </section>
  )
}
