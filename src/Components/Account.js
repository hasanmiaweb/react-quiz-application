import { Link } from "@reach/router";
import classes from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span
        as={Link}
        to="/signup"
        className="material-icons-outlined"
        title="Account"
      >
        account_circle
      </span>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
