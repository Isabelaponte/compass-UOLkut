import classes from "./HomeHeader.module.css";

import magGlass from "../../assets/MagnifyingGlass.svg";
import userImg from "../../assets/iuri.jpeg";
import arrowDown from "../../assets/CaretDown.svg";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <a href="/profile">
              <p className={classes.logo} >UOLkut</p>
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/profile" className={classes.link}>
              Início
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/profile" className={classes.link}>
              Perfil
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/profile" className={classes.link}>
              Comunidade
            </a>
          </li>
          <li className={classes.navChild}>
            <a href="/profile" className={classes.link}>
              Jogos
            </a>
          </li>
        </ul>
        <div className={classes.coiso}>
        <form className={classes.searchForm}>
          <img src={magGlass} />
          <input
            type="text"
            placeholder="Pesquisar no UOLkut"
            className={classes.searchInput}
          />
        </form>
        </div>

      
        <ul className={classes.user}>
          <li>
            <img src={userImg} className={classes.userImg} />
          </li>
          <li>
            <a href="/profile" className={classes.link}>
              <p>Iuri Silva</p>
            </a>
          </li>
          <li>
            
            <a href="/profile" className={classes.link}>
              <img src={arrowDown} className={classes.caret} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
