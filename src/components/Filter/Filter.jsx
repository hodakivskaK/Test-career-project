import Select from 'react-select';

import brands from 'data/brands';
import price from 'data/price';

import { brandsStyles, priceStyles } from './inputStyles';
import s from './Filter.module.css'

export default function Filter() {
  return (
    <div >
      <form className={s.filter__form}>
      
        <label className={s.filter__label}>
        <p>Car brand</p> 
      <Select
    
        className="basic-single"
        classNamePrefix="select"
        name="Car brand"
        options={brands}
        styles={brandsStyles}
    
      />
      </label>
        
        <label className={s.filter__label}>
         <p>Price/ 1 hour</p> 
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="Car price" 
            options={price}
            styles={ priceStyles}
              />
        </label>

         <label className={s.filter__label}>
          <p>Сar mileage / km</p> 
        <div className={s.filter__input}>
          <input type="text" name="millageFrom" placeholder="From" className={s.filter__inputFrom}/>
          <input type="text" name="millageTo" placeholder="To" className={s.filter__inputTo}/>
        </div>
        </label>
        
        <button className={s.filter__btnSubmit}>Search</button>
        </form>
    </div>
  );
}