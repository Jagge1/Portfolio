import './styles/heroSection.css'

export default function HeroSection(){
  return(
    <div className='hero-section-container'>
      <img src="../assets/Portfolio-Portrait-2.png" alt="Illustration portrait" className="portrait"/>

      <article className='description-container'>
        <p className='title'>Hi, my name is...</p>
        <h2 className='name'>Jacob Hellgren.</h2>
        <h2 className='my-role'>I'm a fullstack developer.</h2>
        
        <p className='description'>
          I’m currently a second-year student at Kristianstad University, studying to become a fullstack developer.
          I’m passionate about learning and applying new technologies, and I’m actively looking for opportunities
          to collaborate, grow, and contribute as a developer. If you are looking to collaborate
          don't hesitate to contact me.
        </p>

        <a href="" className='resume-dwnld'>Download my resume</a>

      </article>
      
    </div>
  
  )
}