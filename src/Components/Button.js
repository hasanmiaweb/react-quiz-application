import classes from "../styles/Button.module.css";

const Button = ({ children }) => {
  return (
    <div>
      <div className={classes.button}>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Button;
