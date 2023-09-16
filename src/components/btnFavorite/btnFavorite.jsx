
import s from './btnFavorite.module.css'
import likedFavorite from '../../image/BtnFavorite/likedFavorite.png'
import unLikedFavorite from '../../image/BtnFavorite/unLikedFavorite.png'

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
                <img src={likedFavorite} alt="favorite" /> :
                <img src={unLikedFavorite} alt="not a favorites" />}
    </div>)

}