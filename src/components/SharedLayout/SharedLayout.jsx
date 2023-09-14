import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import s from "./SharedLayout.module.css";

import Loader from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
      <div className={s.container}>
            <Suspense fallback={<Loader/>}>
            <Outlet />
      </Suspense>
    </div>
  );
};