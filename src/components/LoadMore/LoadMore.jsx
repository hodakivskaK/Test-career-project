
import s from './LoadMore.module.css'


export default function LoadMore({onClick}) {

return (
     <>
   <div className={s.loadMore__container}>
      <button className={s.loadMore__btn} onClick={onClick}> Load more</button>
    </div>
    </>
  );
  
}