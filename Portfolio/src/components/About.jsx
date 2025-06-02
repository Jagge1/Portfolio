import './styles/about.css'

export default function About(){
  return (
    <section className='about-container' id='about'>
      <h1 className='about-me-title'>About me</h1>
      <h3 className='stack-title'>This is my Tech Stack</h3>

      <article className='stack-container'>
        <img src="../assets/js-logo.png" className='tech-icon' alt="" />
        <img src="../assets/css-logo.png" className='tech-icon' alt="" />
        <img src="../assets/html-logo.png" className='tech-icon' alt="" />
        <img src="../assets/firebase-logo.png" className='tech-icon' alt="" />
        <img src="../assets/git-logo.png" className='tech-icon' alt="" />
        <img src="../assets/java-logo.png" className='tech-icon' alt="" />   
        <img src="../assets/mongodb-compass-logo.png" className='tech-icon' alt="" />
        <img src="../assets/mysql-logo.png" className='tech-icon' alt="" />
        <img src="../assets/node-js-logo.png" className='tech-icon' alt="" />
        <img src="../assets/python-logo.png" className='tech-icon' alt="" />
        <img src="../assets/react-logo.png" className='tech-icon' alt="" />

      </article>

    </section>
  )
}