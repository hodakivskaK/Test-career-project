import s from './MainTitle.module.css'

export default function MainTitle({title}){
return (
    <h1 className={s.mainTitle}>{title}</h1>
  );
  
}