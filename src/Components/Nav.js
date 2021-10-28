import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="React-quiz-application" />
            <h3>React-Quiz-Application</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
