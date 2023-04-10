import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Loader from "Components/ui/Loader/Loader";
import PageContainer from "Components/ui/PageContainer/PageContainer";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <PageContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageContainer>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;
