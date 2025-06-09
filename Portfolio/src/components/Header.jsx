import './styles/header.css'
import useObserver from '../hooks/useObserver'

export default function Header() {
  useObserver();
  
  return(
    <header>
      <div className="nav-container hidden">

        <p className="logo">JH</p>
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