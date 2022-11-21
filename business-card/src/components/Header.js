import './Header.css'

function Header () {
    return (
      <div className="Header">
        
          {/* <img src={logo} className="header-photo" /> */}
          <h1>Desiree Mendes</h1>
          <p id="about-me">
            Frontend Developer
          </p>
          <p>
            https://personal-portfolio-one.vercel.app/
          </p>
          <button>Email</button>
          <button>LinkedIn</button>
      
      </div>
    );
  }

  export default Header;