import s from './ModalCard.module.css'
import {AiOutlineClose} from 'react-icons/ai';
import { nanoid } from '@reduxjs/toolkit';

export default function ModalCard({car, isOpen, closeModal}) {
  let conditionsOptions = [];
  let modifieDescr = [];

  if (isOpen) {
    conditionsOptions = car.rentalConditions.split('\n');
    modifieDescr = [...car.address.split(', '), `Id: ${car.id}`, `Year: ${car.year}`, `Type: ${car.type}`, `Fuel Consumption: ${car.fuelConsumption}`, `Engine Size: ${car.engineSize}`];
    console.log(modifieDescr)
  }
  

  return (
    <div>
      
      {isOpen && (
        <div className={s.modalBackdrop} >
          <div className={s.modalContent}>
             <AiOutlineClose className={s.closeBtn} onClick={closeModal}/>
            
            
            <div className={s.modalCard__imgContainer}>
              <img src={car.img} alt="#" className={s.modalCard__img}/>
            </div>

             <div className={s.modalCard__decrBox}>
                <p className={s.modalCard__decr}>{car.make} 
                <span className={s.modalCard__decrAccent}> {car.model}, </span>
                {car.year}</p>
            </div>

            <div className={s.modalCard__decrSecondaryBox}>
            <p className={s.catalog__decrSecondary}>{modifieDescr.slice(1).join(" | ")}</p> 
             </div>

            <p className={s.modalCard__description}>{car.description}</p>

            <div className={s.modalCard__featuresBox}>
              <p className={s.modalCard__title}>Accessories and functionalities:</p> 
              <p className={s.modalCard__features}>  {car.accessories.join(" | ")}  |  {car.functionalities.join(" | ")}</p>
            </div>

            <div className={s.modalCard__featuresBox}>
              <p className={s.modalCard__title}>Rental Conditions:</p> 
             
              <div className={s.modalCard__conditionsBox}>
                {conditionsOptions.map(element => {
                  return <div className={s.modalCard__conditions} key={nanoid()}>{element}</div>
                })}
                 
                <div className={s.modalCard__conditions}>Mileage: <span  className={s.modalCard__conditionsAccent}>{car.mileage.toLocaleString()}</span></div>
                  <div className={s.modalCard__conditions}>Price: <span  className={s.modalCard__conditionsAccent}>{car.rentalPrice}</span></div>
                </div>
            </div>

            <a href="tel:+380730000000" className={s.modalCard__rentalBtn}>Rental car</a>
          </div>
        </div>
      )}
    </div>
  );
}