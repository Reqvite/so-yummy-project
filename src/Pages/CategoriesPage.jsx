import PageContainer from "Components/common/PageContainer/PageContainer";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import styled from "styled-components";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

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
        </PageContainer>
      </PageWrapper>
    </main>
  );
};

export default CategoriesPage;
