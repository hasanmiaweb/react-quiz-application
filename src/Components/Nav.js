import { Link } from "@reach/router";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} as={Link} to="/" alt="React-quiz-application" />
            <h3>React-Quiz-Application</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
