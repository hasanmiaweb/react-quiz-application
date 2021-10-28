import classes from "../styles/Button.module.css";

const Button = ({ className, children }) => {
  return (
    <div>
      <div className={`${classes.button} ${classes.className}`}>{children}</div>
    </div>
  );
};

export default Button;
