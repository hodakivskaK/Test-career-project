import PropTypes from 'prop-types';
import s from './MainTitle.module.css'

export default function MainTitle({title}){
return (
    <h1 className={s.mainTitle}>{title}</h1>
  );
  
}

MainTitle.propTypes = {
title: PropTypes.string.isRequired,
};