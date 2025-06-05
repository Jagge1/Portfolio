import './styles/header.css'

export default function Header() {
  return(
    <header>
      <div className="nav-container">

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