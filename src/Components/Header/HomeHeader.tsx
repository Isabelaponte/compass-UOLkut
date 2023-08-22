import classes from "./HomeHeader.module.css";

import orkLogo from "../../assets/logo-orkut.svg";
import magGlass from "../../assets/MagnifyingGlass.svg";
import userImg from "../../assets/iuri.jpeg";
import arrowDown from "../../assets/CaretDown.svg";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <a href="/">
              <img src={orkLogo} className={classes.logo} />
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/" className={classes.link}>
              Início
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/profile" className={classes.link}>
              Perfil
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/" className={classes.link}>
              Comunidade
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/" className={classes.link}>
              Jogos
            </a>
          </li>
        </ul>

        <form className={classes.searchForm}>
          <img src={magGlass} />
          <input
            type="text"
            placeholder="Pesquisar no Orkut"
            className={classes.searchInput}
          />
        </form>
      
        <ul className={classes.user}>
          <li>
            <img src={userImg} className={classes.userImg} />
          </li>
          <li>
            <a href="/" className={classes.link}>
              <p>Iuri Silva</p>
            </a>
          </li>
          <li>
            <a href="/" className={classes.link}>
              <img src={arrowDown} className={classes.caret} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
