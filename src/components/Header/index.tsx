import IHeaderProps from "../../interfaces/IHeaderProps";
import style from './Header.module.scss';

function Header({title}: IHeaderProps) {
  return (
    <header className={style.header}>
      <h1>{ title }</h1>
    </header>
  )
}

export default Header;