import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Loader from "Components/ui/Loader/Loader";
import MainPage from "Pages/MainPage";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainPage>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainPage>
      <Footer />
    </>
  );
};

export default SharedLayout;
