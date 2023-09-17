
import PropTypes from 'prop-types';

import s from './LoadMore.module.css'

export default function LoadMore({onClick}) {
return (
     <>
   <div className={s.loadMore__container}>
      <button className={s.loadMore__btn} onClick={onClick}>Load more</button>
    </div>
    </>
  );
}

LoadMore.propTypes = {
onClick: PropTypes.func.isRequired,
};