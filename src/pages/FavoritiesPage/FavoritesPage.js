
import Catalog from '../../components/Catalog/Catalog'
import AppBar from '../../components/AppBar/AppBar'
import MainTitle from 'components/MainTitle/MainTitle';
import Loader from 'components/Loader/Loader';

import { useState } from 'react';

export default function FavoritesPage(){
  const [favorite, setFavorite] = useState([])


return (
     <>
    <AppBar page={"favorite"} />
    <section >
     
         <MainTitle title="Favorites"/>
      <Catalog catalog={favorite} />
      </section>
    </>
  );
  
}


