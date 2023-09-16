
import Catalog from '../../components/Catalog/Catalog'
import AppBar from '../../components/AppBar/AppBar'
import MainTitle from 'components/MainTitle/MainTitle';

import s from './Favorities.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FavoritesPage(){
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (car) => {
    if (!favorites.map(favorite => favorite.id).includes(car.id)) {
      setFavorites([...favorites, car]);
     
    }

    if (favorites.map(favorite => favorite.id).includes(car.id)) {
      let newFav = favorites.filter((fav) => fav.id !== car.id);
      setFavorites([...newFav]);
    }
      
      localStorage.setItem('ITEM', JSON.stringify(favorites));
  };


 useEffect(() => {
     const favorite = JSON.parse(localStorage.getItem('ITEM'));
   
		if (favorite) {
			setFavorites(favorite);
    }
 }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => {
       localStorage.setItem('ITEM', JSON.stringify(favorites));
    }, 100);
    return () => clearTimeout(timer);
        
  },);
  
  
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
        <Catalog catalog={favorites} addFavorite={addFavorite} favorites={favorites} />}
      </section>
    </>
  );
  
}


