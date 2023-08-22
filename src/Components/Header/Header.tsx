import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.flex}>
          <p className={classes.brand} >UOLkut</p>

          <ul className={classes["flex-information"]}>
            <li className={classes.information}>Centro de segurança</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
