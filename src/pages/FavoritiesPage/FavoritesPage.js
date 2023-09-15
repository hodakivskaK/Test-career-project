
import Catalog from '../../components/Catalog/Catalog'
import AppBar from '../../components/AppBar/AppBar'
import MainTitle from 'components/MainTitle/MainTitle';

import s from './Favorities.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FavoritesPage(){
  const [favorites, setFavorite] = useState([]);

 useEffect(() => {
     const favorite = JSON.parse(localStorage.getItem('ITEM'));
   
		if (favorite) {
			setFavorite(favorite);
    }
     console.log(favorites)
  }, []);
  
return (
     <>
    <AppBar page={"favorite"} />
    <section >
     
      <MainTitle title="Favorites" />
      {favorites.length === 0 ?
        <div>
           <p className={s.favoritesPage_empty}>You don't have any favorite cars <br/>
        Look at <Link to="/catalog" className={s.favoritesPage__link}>Catalog</Link>
        </p></div>:
        <Catalog catalog={favorites} />}
      </section>
    </>
  );
  
}


