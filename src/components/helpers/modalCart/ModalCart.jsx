import { useSelector } from 'react-redux';
import { selectName } from '../../../redux/selectors';
import {
  ButtonHurt,
  ContainerData,
  DescriptionText,
  FetureItem,
  FetureList,
  Img,
  Item,
  NameAndPriceItem,
  NameAndPriceList,
  RatingAndLocatItem,
  RatingAndLocatList,
  Svg,
} from './ModalCart.styled';
import sprite from '../../../icons.svg';

const ModalCart = () => {
  const {
    name,
    price,
    gallery,
    rating,
    reviews,
    location,
    description,
    adults,
    details,
    transmission,
    engine,
  } = useSelector(selectName);

  return (
    <div>
      <ul>
        return (
        <Item>
          <div>
            <Img src={gallery} alt={name} />
          </div>
          <ContainerData>
            <NameAndPriceList>
              <NameAndPriceItem>{name}</NameAndPriceItem>
              <NameAndPriceItem>
                € {price},00
                <ButtonHurt>
                  <Svg width={24} height={24}>
                    <use xlinkHref={sprite + '#icon-hurt-bt'} />
                  </Svg>
                </ButtonHurt>
              </NameAndPriceItem>
            </NameAndPriceList>
            <RatingAndLocatList>
              <RatingAndLocatItem>
                <Svg width={16} height={16}>
                  <use xlinkHref={sprite + '#icon-stars'} />
                </Svg>
                {rating}({reviews} Reviews)
              </RatingAndLocatItem>
              <RatingAndLocatItem>
                <Svg width={16} height={16}>
                  <use xlinkHref={sprite + '#icon-map-pin'} />
                </Svg>
                {location}
              </RatingAndLocatItem>
            </RatingAndLocatList>
            <DescriptionText>{description}</DescriptionText>
            <FetureList>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-children'} />
                </Svg>
                {adults} adults
              </FetureItem>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-automat'} />
                </Svg>
                {transmission}
              </FetureItem>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-petrol'} />
                </Svg>
                {engine}
              </FetureItem>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-ckichen'} />
                </Svg>
                Kitchen
              </FetureItem>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-bad'} />
                </Svg>
                {details} beds
              </FetureItem>
              <FetureItem>
                <Svg width={20} height={20}>
                  <use xlinkHref={sprite + '#icon-ac'} />
                </Svg>
                AC
              </FetureItem>
            </FetureList>
          </ContainerData>
        </Item>
        );
      </ul>
    </div>
  );
};

export default ModalCart;

// import axios from 'axios'; // Імпорт Axios
// import { useEffect, useState } from 'react';
// import {
//   Img,
//   Item,
//   NameAndPriceItem,
//   RatingAndLocatItem,
//   FetureItem,
//   Button,
//   NameAndPriceList,
//   ContainerData,
//   RatingAndLocatList,
//   DescriptionText,
//   ButtonHurt,
//   FetureList,
//   Svg,
// } from './AdvertCart.styled';
// import sprite from 'icons.svg';

// const url = 'https://65f9f5cd3909a9a65b19b6cb.mockapi.io/adverts/advert';

// export const AdrertCart = () => {
//   const [adverts, setAdverts] = useState([]);
//   console.log(adverts);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url); // Відправка GET-запиту на мокований API
//         setAdverts(response.data); // Зберегти отримані дані у стані
//       } catch (error) {
//         console.error('Помилка під час відправлення запиту:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (

//   );
// };
