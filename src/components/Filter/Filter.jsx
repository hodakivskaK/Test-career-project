import Select from 'react-select';

import brands from 'data/brands';
import price from 'data/price';

import { brandsStyles, priceStyles } from './inputStyles';
import s from './Filter.module.css'

export default function Filter() {
  return (
    <div >
      <form className={s.filter__form}>
      
        <label className={s.filter__wrappers}>
        <p>Car brand</p> 
      <Select
    
        className="basic-single"
        classNamePrefix="select"
        name="Car brand"
        options={brands}
        styles={brandsStyles}
    
      />
      </label>
        
        <label className={s.filter__wrappers}>
         <p>Price/ 1 hour</p> 
          <Select
            className="basic-single"
            classNamePrefix="select"
            name="Car price" 
            options={price}
            styles={ priceStyles}
              />
        </label>

         <div className={s.filter__wrappers}>
          <p>Сar mileage / km</p> 
         <div className={s.filter__milageInputs}>
            <div className={s.filter__div}>
            <label className={s.filter__testLabel}> From </label>
              <input type="text" placeholder='' name="millageFrom" className={s.filter__testInput}/>
            </div>

              <div className={s.filter__div}>
            <label className={s.filter__testLabel}> To </label>
              <input type="text" name="millageTo" placeholder='' className={s.filter__testInput}/>
            </div>
      </div>
        </div>
        
        <button className={s.filter__btnSubmit}>Search</button>

      

      </form>
      
     
    </div>
  );
}