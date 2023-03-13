import classes from './ButtonRow.module.css';

const ButtonRow = ({ children }) => {
  return (
    <div className={classes.buttonRow}>
      {children}
    </div>
  );
};

export default ButtonRow;