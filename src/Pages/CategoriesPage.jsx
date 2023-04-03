import PageContainer from "Components/common/PageContainer/PageContainer";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import CategoriesList from "Components/CategoriesList/CategoriesList";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";

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
