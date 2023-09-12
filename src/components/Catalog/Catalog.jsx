

// import { useState } from 'react';
// import btnFavorite from 'components/btnFavorite/btnFavorite';
import BtnFavorite from '../btnFavorite/btnFavorite'
import s from './Catalog.module.css'

export default function Catalog({catalog}) {

  


        
  return (
    <div>
      
      <h1>Catalog</h1>
      
      <div className={s.catalog__container}>
        {catalog.map(car => {
        const modifieDescr = [car.address.split(', '), car.rentalCompany, car.type, car.model, car.mileage, car.functionalities[0]];
          
        return <div key={car.id} className={s.catalog__card}>
          
          <img src={car.img} alt={car.make} className={s.catalog__img} />
              <BtnFavorite/>
              <div className={s.catalog__decrBox}>
                <p className={s.catalog__decr}>{car.make} 
                <span className={s.catalog__decrAccent}> {car.model}, </span>
                {car.year}</p>
                <p className={s.catalog__decr}>{car.rentalPrice}</p>
            </div>
          
          <div className={s.catalog__decrSecondaryBox}>
            <p className={s.catalog__decrSecondary}>{modifieDescr.slice(1).join(" | ")}</p> 
             </div>
              
              <button className={s.catalog__btn} type='button'>Learn more</button>
        </div>
        
      })}
      </div>
    </div>
  );
}