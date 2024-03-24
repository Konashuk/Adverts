import { Container, ContainerForm } from './ContainerFeature.styled';
import BookForm from '../bookForm/BookForm';
import Features from './Features';

const ContainerFeature = () => {
  return (
    <Container>
      <Features />
      <ContainerForm>
        <BookForm />
      </ContainerForm>
    </Container>
  );
};

export default ContainerFeature;
