import './styles/about.css'

export default function About(){
  return (
    <section className='about-container' id='about'>
      <h1 className='about-me-title'>About me</h1>

        <article className='about-description-container'>

          <p className='about-me-description'>
          I’m currently a second-year student at Kristianstad University, studying to become a fullstack developer.
          I’m passionate about learning and applying new technologies, and I’m actively looking for opportunities
          to collaborate, grow, and contribute as a developer. If you are looking to collaborate
          don't hesitate to contact me.
        </p>

        </article>

      <h3 className='stack-title'>Technologies & Methodologies</h3>

      <article className='stack-container'>
      
      <article className='tech-icon-container'>
        <img src="../assets/js-logo.png" className='tech-icon' alt="" />
        <p className='icon-text'>JavaScript</p>
      </article>

      <article className='tech-icon-container'>
        <img src="../assets/css-logo.png" className='tech-icon' alt="" />
        <p className='icon-text'>HTML5</p>
      </article>

        <article className='tech-icon-container'>
          <img src="../assets/html-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>CSS3</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/firebase-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>Firebase</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/git-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>Git</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/java-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>Java</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/mongodb-compass-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>MongoDb</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/mysql-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>MySQL</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/node-js-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>NodeJs</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/python-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>Python</p>
        </article>

        <article className='tech-icon-container'>
          <img src="../assets/react-logo.png" className='tech-icon' alt="" />
          <p className='icon-text'>React</p>
        </article>

      </article>

    </section>
  )
}