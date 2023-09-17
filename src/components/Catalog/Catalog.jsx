import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import ModalCard from 'components/ModalCard/ModalCard';
import BtnFavorite from '../btnFavorite/btnFavorite'
import LoadMore from 'components/LoadMore/LoadMore';

import s from './Catalog.module.css'

export default function Catalog({onClick, showLoadMoreBtn, catalog, addFavorite, favorites}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCar, setIsCurrentCar] = useState([]);
  
  const openModal = (car) => {
    setIsCurrentCar(car)
    setIsOpen(true);
    document.body.classList.add('modal-open')
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsCurrentCar([]);
    document.body.classList.remove('modal-open');
  };

  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
      const handleEscapeKey = (event) => {
    if (event.key === 'Escape' && isOpen) {
      closeModal();
    }
  }
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

        
  return (
    <div>
      <div className={s.catalog__container}>
        {catalog.map(car => {
        const modifieDescr = [car.address.split(', '), car.rentalCompany, car.type, car.model, car.id, car.functionalities[0]];
          
        return <div key={car.id} className={s.catalog__card }>
          
          <img src={car.img} alt={car.make} className={s.catalog__img} />
          <BtnFavorite car={car} addFavorite={addFavorite} favorites={favorites} />
              <div className={s.catalog__decrBox}>
                <p className={s.catalog__decr}>{car.make} 
                <span className={s.catalog__decrAccent}> {car.model}, </span>
                {car.year}</p>
                <p className={s.catalog__decr}>{car.rentalPrice}</p>
            </div>
          
          <div className={s.catalog__decrSecondaryBox}>
            <p className={s.catalog__decrSecondary}>{modifieDescr.slice(1).join(" | ")}</p> 
             </div>
              
          <button className={s.catalog__btn} type='button' onClick={() =>openModal(car)}>Learn more</button>
          <ModalCard car={currentCar} isOpen={isOpen} closeModal={onClickClose} />
        </div>
        
      })}

        {showLoadMoreBtn && <LoadMore onClick={onClick} />}
      </div>
    </div>
  );
}



Catalog.propTypes = {
  onClick: PropTypes.func,
  showLoadMoreBtn: PropTypes.bool,
  catalog: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};