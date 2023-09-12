import { Link } from "react-router-dom";

import s from './HomePage.module.css'

export default function HomePage() {
  
    
    return <div className={s.home_box}>
    <h1 className={s.home_title}>Looking for a car to rent? Easy way for searching</h1>
           
             <Link to={`/catalog`} className={s.home_link}>See a catalog </Link>
          
    </div>
  
}
