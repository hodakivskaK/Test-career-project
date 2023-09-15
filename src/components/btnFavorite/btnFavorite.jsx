
import s from './btnFavorite.module.css'
import likedFavorite from '../../image/BtnFavorite/likedFavorite.png'
import unLikedFavorite from '../../image/BtnFavorite/unLikedFavorite.png'



export default function BtnFavorite({car, addFavorite, favoriteIcon}) { 
    return (
        <div className={s.btnFavorite} onClick={() => addFavorite(car)} >
            {favoriteIcon ?
                <img src={likedFavorite} alt="favorite" /> :
                <img src={unLikedFavorite} alt="not a favorites" />}
    </div>)

}