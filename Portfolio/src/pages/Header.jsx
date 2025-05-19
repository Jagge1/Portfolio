import './styles/Header.css'
export default function Header() {
  return(
    <header>
      <div className="nav-container">
        <a href="#" className="logo">Jacob Hellgren</a>
        <nav>
        
          <ul>
            <li><a href="/Projects">Project</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>

          </ul>

        </nav>
      </div>
    </header>
    

  )
}