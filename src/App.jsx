import { Route, Routes  } from "react-router-dom";
import { lazy, Suspense  } from 'react'


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritiesPage/FavoritesPage'));
// const Loader = lazy(() => import('./components/Loader'));


export const App = () => {
  return (
    <Suspense fallback={<div>"ded"</div>}>
      <Routes>
          <Route path="/" element={<HomePage />} />
      
          <Route path="/catalog" element={<CatalogPage /> } />

          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />
        
        </Routes>
    </Suspense>
  );
    
}


 // isRefreshing ? (
  //   <b>Refreshing user...</b>
  //    ) :
      // (