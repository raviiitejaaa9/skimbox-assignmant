
import "./index.css"

function NavbarComponent() {

  return (
    <nav className="navbar navbar-expand-lg custom-nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img alt = "logo" src = "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" className='nav-logo'  /></a>

      <div className='navbar-right d-lg-none ' >

        <button className='freetrail-button mr-3  ' > Start Free Trail </button>
      
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>

      

      

      <div className="navbar-right  nav-buttons ">
        <button className=" login-button ">Login</button>
        <button className="start-free-trail-button   ">Start Free Trial</button>
      </div>

    </div>
  </nav>
)

}

export default NavbarComponent