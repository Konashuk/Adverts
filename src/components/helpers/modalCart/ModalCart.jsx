import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedName } from '../../../redux/selectors';
import {
  ContainerData,
  DescriptionText,
  Img,
  NameAndPriceItem,
  NameAndPriceList,
  RatingAndLocatItem,
  RatingAndLocatList,
  Svg,
  ContainerImg,
  Button,
  CloseBtn,
} from './ModalCart.styled';
import sprite from '../../../icons.svg';
import Features from './fetureList/features/ContainerFeature';
import { useState } from 'react';
import { setModal } from '../../../redux/slice';
import ContainerFeature from './fetureList/features/ContainerFeature';

const ModalCart = () => {
  const dispatch = useDispatch();
  const [cumper] = useSelector(selectSelectedName);
  const [selectedTab, setSelectedTab] = useState('features');

  const handleTabChange = tab => {
    setSelectedTab(tab); // Функція для зміни вибраної вкладки
  };

  const { name, price, gallery, rating, reviews, location, description } =
    cumper;

  return (
    <div>
      <CloseBtn onClick={() => dispatch(setModal(false))}>
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#icon-close'} />
        </svg>
      </CloseBtn>
      <ContainerData>
        <NameAndPriceList>
          <NameAndPriceItem>{name}</NameAndPriceItem>
          <RatingAndLocatList>
            <RatingAndLocatItem>
              <Svg width={16} height={16}>
                <use xlinkHref={sprite + '#icon-stars'} />
              </Svg>
              {rating}({reviews.length} Reviews)
            </RatingAndLocatItem>
            <RatingAndLocatItem>
              <Svg width={16} height={16}>
                <use xlinkHref={sprite + '#icon-map-pin'} />
              </Svg>
              {location}
            </RatingAndLocatItem>
          </RatingAndLocatList>
          <NameAndPriceItem>€ {price},00</NameAndPriceItem>
        </NameAndPriceList>
        <ContainerImg>
          {gallery.map(item => (
            <Img src={item} alt={name} />
          ))}
        </ContainerImg>
        <DescriptionText>{description}</DescriptionText>

        <Button onClick={() => handleTabChange('features')}>Features</Button>
        <Button onClick={() => handleTabChange('reviews')}>Reviews</Button>

        {selectedTab === 'features' && <ContainerFeature />}

        {/* Рендер компоненту Reviews, якщо вкладка "Reviews" вибрана */}
        {selectedTab === 'reviews' && <ContainerFeature />}
      </ContainerData>
    </div>
  );
};

export default ModalCart;
