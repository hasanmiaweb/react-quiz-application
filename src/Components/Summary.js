import successImage from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";
const Summary = () => {
  return (
    <div>
      <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={classes.badge}>
          <img src={successImage} alt="Success" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
