import { Route, Routes  } from "react-router-dom";
import { lazy  } from 'react'
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritiesPage/FavoritesPage'));



export const App = () => {
  return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
      
          <Route path="/catalog" element={<CatalogPage /> } />

          <Route
            path="/favorite"
            element={<FavoritesPage />}
          />
        </Route>
      </Routes>
  );
    
}