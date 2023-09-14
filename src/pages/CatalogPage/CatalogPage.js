import { fetchCars } from '../../fetchAPI'
import { useState, useEffect } from 'react'

import  Filter  from '../../components/Filter/Filter'
import Catalog from '../../components/Catalog/Catalog'
import  AppBar  from '../../components/AppBar/AppBar'
import MainTitle from 'components/MainTitle/MainTitle';

import s from './Catalog.module.css'

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);


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
  

  return (
  error? <h2 className={s.errorMistake}>Something wrong, please refresh a page</h2> :
    <div>
      <AppBar /> 
    
    <section>
          <Filter />
          <Catalog catalog={cars} />
    </section>
    </div>
  );
}

  