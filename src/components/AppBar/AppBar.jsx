import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { BsCarFront } from 'react-icons/bs';

import s from './AppBar.module.css'

export default function AppBar({page}) {
return (
    <header className={s.appBar__header}>
        <div className={s.appBar__wrapper}>

        <div className={s.appBar__logoBox}>
                <p className={s.appBar__logoTitle}>Rental car</p>
                <BsCarFront className={s.appBar__logoIcon} />
        </div>
            
        {page === "favorite" ?
            <Link to="/catalog" className={s.appBar__link}>Catalog</Link>:
            <Link to="/favorite" className={s.appBar__link}>Favorites</Link>}
        </div>
    </header>
  );
}


AppBar.propTypes = {
  page: PropTypes.string.isRequired,
};