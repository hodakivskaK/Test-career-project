import { Link } from "react-router-dom";
import s from './AppBar.module.css'
import { BsCarFront } from 'react-icons/bs';

export default function AppBar({page}) {
  
return (
    <header className={s.AppBar__header}>
        <div className={s.AppBar__wrapper}>

        <div className={s.AppBar__logoBox}>
                <p className={s.AppBar__logoTitle}> Rental car </p>
                <BsCarFront className={s.AppBar__logoIcon} />
        </div>
            
        {page === "favorite" ?
            <Link to="/catalog" className={s.AppBar__link}>Catalog</Link>:
            <Link to="/favorite" className={s.AppBar__link}>Favorites</Link>}
        </div>
    </header>
  );
}