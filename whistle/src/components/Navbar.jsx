import '../cssFiles/Navbar.css';
import whistleLogo from '../assets/whistle-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">
          <img src={whistleLogo} alt="Whistle" className="navbar__logo" />
        </a>
        
        <button className="navbar__cta" aria-label="Book a Free Scan">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
            <path d="M15 5a6 6 0 016 6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M15 1a10 10 0 0110 10" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}