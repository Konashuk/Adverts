import axios from 'axios'; // Імпорт Axios
import { useEffect, useState } from 'react';
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
  SvgHurt,
  SvgStars,
  SvgPin,
} from './AdvertCart.styled';
import sprite from 'icons.svg';

const url = 'https://65f9f5cd3909a9a65b19b6cb.mockapi.io/adverts/advert';

export const AdrertCart = () => {
  const [adverts, setAdverts] = useState([]);
  console.log(adverts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // Відправка GET-запиту на мокований API
        setAdverts(response.data); // Зберегти отримані дані у стані
      } catch (error) {
        console.error('Помилка під час відправлення запиту:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {adverts.map(item => {
          return (
            <Item key={item.id}>
              <div>
                <Img
                  src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                  alt={item.name}
                />
              </div>
              <ContainerData>
                <NameAndPriceList>
                  <NameAndPriceItem>{item.name}</NameAndPriceItem>
                  <NameAndPriceItem>
                    € {item.price}
                    <ButtonHurt>
                      <SvgHurt>
                        <use xlinkHref={sprite + '#icon-hurt-bt'} />
                      </SvgHurt>
                    </ButtonHurt>
                  </NameAndPriceItem>
                </NameAndPriceList>
                <RatingAndLocatList>
                  <RatingAndLocatItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-stars'} />
                    </SvgStars>
                    {item.rating}({item.reviews.length} Reviews)
                  </RatingAndLocatItem>
                  <RatingAndLocatItem>
                    <SvgPin>
                      <use xlinkHref={sprite + '#icon-map-pin'} />
                    </SvgPin>
                    {item.location}
                  </RatingAndLocatItem>
                </RatingAndLocatList>
                <DescriptionText>{item.description}</DescriptionText>
                <FetureList>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-children'} />
                    </SvgStars>
                    {item.adults} adults
                  </FetureItem>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-automat'} />
                    </SvgStars>
                    {item.transmission}
                  </FetureItem>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-petrol'} />
                    </SvgStars>
                    {item.engine}
                  </FetureItem>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-ckichen'} />
                    </SvgStars>
                    Kitchen
                  </FetureItem>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-bad'} />
                    </SvgStars>
                    {item.details.beds} beds
                  </FetureItem>
                  <FetureItem>
                    <SvgStars>
                      <use xlinkHref={sprite + '#icon-ac'} />
                    </SvgStars>
                    AC
                  </FetureItem>
                </FetureList>
                <Button>Show more</Button>
              </ContainerData>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
