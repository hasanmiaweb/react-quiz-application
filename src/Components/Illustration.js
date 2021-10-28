import classes from "../styles/Illustration.module.css";
const Illustration = ({ images }) => {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={images} alt="Signup" />
      </div>
    </div>
  );
};

export default Illustration;
