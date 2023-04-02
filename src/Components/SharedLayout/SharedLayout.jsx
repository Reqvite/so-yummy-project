import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Loader from "Components/ui/Loader/Loader";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
