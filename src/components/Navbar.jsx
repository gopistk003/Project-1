
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Contact Us", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">

        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">
            <Compass size={22} />
          </span>

          <span>
            WORLD <b>EXPLORER</b>
            <small>JOURNEYS WORTH REMEMBERING</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "main-nav open" : "main-nav"}>

          {links.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              onClick={close}
              className={({ isActive }) =>
                isActive && path === "/" ? "active" : ""
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="nav-actions">
            <Link
              to="/login"
              onClick={close}
              className="login-link"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={close}
              className="btn btn-small"
            >
              Register
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
}
