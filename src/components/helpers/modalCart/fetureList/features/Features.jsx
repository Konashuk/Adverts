import { selectSelectedName } from '../../../../../redux/selectors';
import { useSelector } from 'react-redux';
import sprite from '../../../../../icons.svg';
import {
  ContainerFeature,
  FetureList,
  FetureItem,
  Svg,
  Details,
  DetailsItem,
} from './Features.styled';

const Features = () => {
  const [cumper] = useSelector(selectSelectedName);

  const {
    adults,
    transmission,
    details,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = cumper;

  const { airConditioner, beds, hob } = details;
  return (
    <ContainerFeature>
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
          {beds} beds
        </FetureItem>
        <FetureItem>
          <Svg width={20} height={20}>
            <use xlinkHref={sprite + '#icon-air-conditioner'} />
          </Svg>
          {airConditioner}
          air conditioner
        </FetureItem>
        <FetureItem>
          <Svg width={20} height={20}>
            <use xlinkHref={sprite + '#icon-cd'} />
          </Svg>
          CD
        </FetureItem>
        <FetureItem>
          <Svg width={20} height={20}>
            <use xlinkHref={sprite + '#icon-radio'} />
          </Svg>
          Radio
        </FetureItem>
        <FetureItem>
          <Svg width={20} height={20}>
            <use xlinkHref={sprite + '#icon-hp'} />
          </Svg>
          {hob} hob
        </FetureItem>
      </FetureList>
      <Details>Vehicle details</Details>
      <svg style={{ marginBottom: '24px' }} width={430} height={3}>
        <use xlinkHref={sprite + '#icon-line'} />
      </svg>
      <ul>
        <DetailsItem>
          <p>Form </p>
          <span>{form}</span>
        </DetailsItem>
        <DetailsItem>
          <p>Length</p>
          <span>{length}</span>
        </DetailsItem>
        <DetailsItem>
          <p>Width</p>
          <span>{width}</span>
        </DetailsItem>
        <DetailsItem>
          <p>Height</p>
          <span>{height}</span>
        </DetailsItem>
        <DetailsItem>
          <p>Tank</p>
          <span>{tank}</span>
        </DetailsItem>
        <DetailsItem>
          <p>Consumption</p>
          <span>{consumption}</span>
        </DetailsItem>
      </ul>
    </ContainerFeature>
  );
};

export default Features;
