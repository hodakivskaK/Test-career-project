
import PropTypes from 'prop-types';
import s from './btnFavorite.module.css'
import likedFavorite from '../../image/BtnFavorite/active.svg'
import unLikedFavorite from '../../image/BtnFavorite/normal.svg'

import { useState, useEffect } from 'react';

export default function BtnFavorite({ car, addFavorite, favorites }) { 
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    
    useEffect(() => {
        if (favorites.map(favorite => favorite.id).includes(car.id)) {
        setFavoriteIcon(true)
        }
        if (!favorites.map(favorite => favorite.id).includes(car.id)) {
        setFavoriteIcon(false)
    }
  }, [favorites, car.id]);

    return (
        <div className={s.btnFavorite} onClick={() =>  addFavorite(car)} >
            {favoriteIcon ?
                <img className={s.btnFavorite__icon} src={likedFavorite} alt="favorite" /> :
                <img className={s.btnFavorite__icon} src={unLikedFavorite} alt="not a favorites" />}
    </div>)

}

BtnFavorite.propTypes = {
car: PropTypes.object.isRequired,
addFavorite: PropTypes.func.isRequired,
favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};