import React from "react";
import styled from "styled-components";

import PageContainer from "Components/common/PageContainer/PageContainer";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";

import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import CategoriesList from "Components/CategoriesList/CategoriesList";

const PageWrapper = styled.div`
  position: relative;
`;

const CategoriesPage = () => {
  return (
    <main>
      <PageWrapper>
        <ImageBackground />
        <PageContainer>
          <Title>Categories</Title>
          <CategoriesList />
        </PageContainer>
      </PageWrapper>
    </main>
  );
};

export default CategoriesPage;
