import IHeaderProps from "../interfaces/IHeaderProps";
import style from './Button.module.scss';

function Header({title}: IHeaderProps) {
  return (
    <h1 className={style.header}>{ title }</h1>
  )
}

export default Header;