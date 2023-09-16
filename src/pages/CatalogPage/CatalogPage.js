import { fetchCars } from '../../fetchAPI'
import { useState, useEffect } from 'react'

import  Filter  from '../../components/Filter/Filter'
import Catalog from '../../components/Catalog/Catalog'
import  AppBar  from '../../components/AppBar/AppBar'

import s from './Catalog.module.css'

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [favorites, setFavorites] = useState([]);
  
    
  const addFavorite = (car) => {
    if (!favorites.map(favorite => favorite.id).includes(car.id)) {
      setFavorites([...favorites, car]);
     
    }

    if (favorites.map(favorite => favorite.id).includes(car.id)) {
      let newFav = favorites.filter((fav) => fav.id !== car.id);
      setFavorites([...newFav]);
    }
      
    //  localStorage.setItem('ITEM', JSON.stringify(favorites));
    console.log(favorites)
  };

  useEffect(() => {
      (async () => {
        try {
          const response = await fetchCars();
          response && setCars(response);
        } catch (e) {
          setError(e)
        }
    })();
  }, []);

    useEffect(() => {
     const favorite = JSON.parse(localStorage.getItem('ITEM'));
        console.log(favorite)
		if (favorite) {
			setFavorites([...favorite]);
    }
  }, []);
  
  
  useEffect(() => {
    if (page !== 1) {
      (async () => {
        try {
          const response = await fetchCars(page);
          response && setCars(prev => { return [...prev, ...response]; });
          console.log(response)
           response && response.length < 8 && setShowLoadMoreBtn(false);
        } catch (e) {
          setError(e.message);
        }
      })();
    }
  },  [page]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
       localStorage.setItem('ITEM', JSON.stringify(favorites));
    }, 100);
    return () => clearTimeout(timer);
        
  },);

  return (
  error? <h2 className={s.errorMistake}>Something wrong, please refresh a page</h2> :
    <div>
      <AppBar /> 
    <section>
          <Filter />
          <Catalog onClick={() => setPage(prev => prev + 1)} showLoadMoreBtn={showLoadMoreBtn} catalog={cars} addFavorite={addFavorite} favorites={favorites} />
    </section>
    </div>
  );
}

  