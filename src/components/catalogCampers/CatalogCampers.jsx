import { AdrertCart } from 'components/catalogCampers/advertCart/AdvertCart';
import { Container } from './CatalogCampers.styled';
import Filters from 'components/catalogCampers/filters/Filters';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCumpers } from '../../redux/operation';
import ModalCumper from 'components/helpers/modal/Modal';

const CatalogCampers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllCumpers());
      } catch (error) {
        console.error('Помилка при отриманні даних з getAllCumpers:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <Container>
      <Filters />
      <AdrertCart />
      <ModalCumper />
    </Container>
  );
};

export default CatalogCampers;
