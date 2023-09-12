
import s from './btnFavorite.module.css'
import likedFavorite from '../../image/BtnFavorite/likedFavorite.png'
import unLikedFavorite from '../../image/BtnFavorite/unLikedFavorite.png'
import { useState } from 'react';


export default function BtnFavorite() { 
      const [favorite, setFavorite] = useState(false);

    function onFavoriteButtonPress(){
       if (!favorite) {
    setFavorite(true);
    } else {
     setFavorite(false);
    }
    }
    

    return (
        <div className={s.btnFavorite} onClick={onFavoriteButtonPress} >
            {favorite ?
                <img src={likedFavorite} alt="favorite" /> :
                <img src={unLikedFavorite} alt="not a favorites" />}
    </div>)

}