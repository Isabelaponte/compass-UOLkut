import classes from "./Header.module.css";
import brand from "../../assets/brand_orkut.png";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.flex}>
          <img src={brand} className={classes.brand} />

          <ul className={classes["flex-information"]}>
            <li className={classes.information}>Sobre o Orkut</li>
            <li className={classes.information}>Centro de segurança</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
