

import { useState, useEffect } from 'react';

import ModalCard from 'components/ModalCard/ModalCard';
import BtnFavorite from '../btnFavorite/btnFavorite'
import LoadMore from 'components/LoadMore/LoadMore';

import s from './Catalog.module.css'

export default function Catalog({onClick, showLoadMoreBtn, catalog , addFavorite, favoriteIcon}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCar, setIsCurrentCar] = useState([]);

  const [favoriteIcona, setFavoriteIcona] = useState(false);
  
  const openModal = (car) => {
    setIsCurrentCar(car)
    setIsOpen(true);
    document.body.classList.add('modal-open')
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsCurrentCar([]);
    document.body.classList.remove('modal-open');
    console.log(currentCar)
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape' && isOpen) {
      closeModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  useEffect(() => {
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
          <BtnFavorite car={car} addFavorite={addFavorite} favoriteIcon={favoriteIcon} />
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
          <ModalCard car={currentCar} isOpen={isOpen} closeModal={closeModal} />
        </div>
        
      })}

        {showLoadMoreBtn && <LoadMore onClick={onClick} />}
      </div>
    </div>
  );
}