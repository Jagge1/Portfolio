import './styles/header.css'

export default function Header() {
  return(
    <header>
      <div className="nav-container">

        <p className="logo">Jacob Hellgren</p>
        <nav>
        
          <ul className='nav-links'>
            <li><a href="/Projects">PROJECTS</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Contact">CONTACT</a></li>

          </ul>

        </nav>
      </div>
    </header>
    

  )
}