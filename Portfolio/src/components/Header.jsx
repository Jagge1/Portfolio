import './styles/header.css'
import useObserver from '../hooks/useObserver'

export default function Header() {
  useObserver();
  
  return(
    <header>
      <div className="nav-container hidden" id='header'>

        <p className="logo">JH</p>
        <img src="../assets/Portfolio-Portrait-2.png" alt="Illustration portrait" className="portrait-logo"/>

        <nav>
        
          <ul className='nav-links'>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>

          </ul>

        </nav>
      </div>
    </header>
    

  )
}