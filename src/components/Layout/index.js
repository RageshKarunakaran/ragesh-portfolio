import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="header">
        <ul className="flex-dir-column list-unstyled">
          <li className="nav-item-list">
            <Link className="nav-link" to="/">
              <div className="menu">
                <img src="./estate.svg" />
                <h2 className="fw-bold">Home</h2>
              </div>
            </Link>
          </li>
          <li className="nav-item-list">
            <Link className="nav-link" to="/about">
              <div className="menu">
                <img src="./user.svg" />
                <h2 className="fw-bold">About</h2>
              </div>
            </Link>
          </li>
          <li className="nav-item-list">
            <Link className="nav-link" to="/portfolio">
              <div className="menu">
                <img src="./bag-alt.svg" />
                <h2 className="fw-bold">Portfolio</h2>
              </div>
            </Link>
          </li>
          <li className="nav-item-list">
            <Link className="nav-link" to="/contact">
              <div className="menu">
                <img src="./envelope.svg" />
                <h2 className="fw-bold">Contact</h2>
              </div>
            </Link>
          </li>
          <li className="nav-item-list">
            <Link className="nav-link" to="/blog">
              <div className="menu">
                <img src="./hipchat.svg" />
                <h2 className="fw-bold">Blog</h2>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;