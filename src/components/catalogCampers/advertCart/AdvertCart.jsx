import {
  Img,
  Item,
  NameAndPriceItem,
  RatingAndLocatItem,
  FetureItem,
  Button,
  NameAndPriceList,
  ContainerData,
  RatingAndLocatList,
  DescriptionText,
  ButtonHurt,
  FetureList,
  Svg,
} from './AdvertCart.styled';
import sprite from 'icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCumpers, selectModal } from '../../../redux/selectors';
import { setCumper, setModal } from '../../../redux/slice';

export const AdrertCart = () => {
  const dispatch = useDispatch();
  const cumpers = useSelector(selectCumpers);

  const onclick = name => {
    dispatch(setCumper(name));
    dispatch(setModal(true));
  };

  return (
    <div>
      <ul>
        {cumpers.map(item => {
          return (
            <Item key={item._id}>
              <div>
                <Img src={item.gallery[0]} alt={item.name} />
              </div>
              <ContainerData>
                <NameAndPriceList>
                  <NameAndPriceItem>{item.name}</NameAndPriceItem>
                  <NameAndPriceItem>
                    € {item.price},00
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
                    {item.rating}({item.reviews.length} Reviews)
                  </RatingAndLocatItem>
                  <RatingAndLocatItem>
                    <Svg width={16} height={16}>
                      <use xlinkHref={sprite + '#icon-map-pin'} />
                    </Svg>
                    {item.location}
                  </RatingAndLocatItem>
                </RatingAndLocatList>
                <DescriptionText>{item.description}</DescriptionText>
                <FetureList>
                  <FetureItem>
                    <Svg width={20} height={20}>
                      <use xlinkHref={sprite + '#icon-children'} />
                    </Svg>
                    {item.adults} adults
                  </FetureItem>
                  <FetureItem>
                    <Svg width={20} height={20}>
                      <use xlinkHref={sprite + '#icon-automat'} />
                    </Svg>
                    {item.transmission}
                  </FetureItem>
                  <FetureItem>
                    <Svg width={20} height={20}>
                      <use xlinkHref={sprite + '#icon-petrol'} />
                    </Svg>
                    {item.engine}
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
                    {item.details.beds} beds
                  </FetureItem>
                  <FetureItem>
                    <Svg width={20} height={20}>
                      <use xlinkHref={sprite + '#icon-ac'} />
                    </Svg>
                    AC
                  </FetureItem>
                </FetureList>
                <Button onClick={() => onclick(item.name)}>Show more</Button>
              </ContainerData>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
