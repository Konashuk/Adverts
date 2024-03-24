import {
  ButtonSearch,
  Button,
  Input,
  SvgPin,
  ContainerInput,
  Text,
  FilterText,
  FilterList,
  Container,
  ContainerEquipment,
  ContainerType,
} from './Filters.styled';
import sprite from '../../../icons.svg';

const Filters = () => {
  return (
    <Container>
      <ContainerInput>
        <Text>Location</Text>
        <Input type="text" placeholder="Kyiv, Ukraine" />
        <SvgPin width={18} height={20}>
          <use xlinkHref={sprite + '#icon-map-pin'} />
        </SvgPin>
      </ContainerInput>

      <ContainerEquipment>
        <Text>Filters</Text>
        <FilterText style={{ marginTop: '14px' }}>Vehicle equipment</FilterText>
        <svg style={{ marginBottom: '24px' }} width={360} height={2}>
          <use xlinkHref={sprite + '#icon-line'} />
        </svg>
        <FilterList>
          <FilterList>
            <Button>
              <svg width={32} height={32}>
                <use xlinkHref={sprite + '#icon-ac'} />
              </svg>
              AC
            </Button>
          </FilterList>
          <FilterList>
            <Button>
              <svg width={32} height={32}>
                <use xlinkHref={sprite + '#icon-automat'} />
              </svg>
              Automatic
            </Button>
          </FilterList>
          <FilterList>
            <Button>
              <svg width={32} height={32}>
                <use xlinkHref={sprite + '#icon-ckichen'} />
              </svg>
              Kitchen
            </Button>
          </FilterList>
          <FilterList>
            <Button>
              <svg width={32} height={32}>
                <use xlinkHref={sprite + '#icon-tv'} />
              </svg>
              TV
            </Button>
          </FilterList>
          <FilterList>
            <Button>
              <svg width={32} height={32}>
                <use xlinkHref={sprite + '#icon-shover'} />
              </svg>
              Shower/WC
            </Button>
          </FilterList>
        </FilterList>
      </ContainerEquipment>
      <ContainerType>
        <FilterText>Vehicle type</FilterText>
        <svg style={{ marginBottom: '24px' }} width={360} height={2}>
          <use xlinkHref={sprite + '#icon-line'} />
        </svg>
        <FilterList>
          <li>
            <Button>
              <svg width={40} height={28}>
                <use xlinkHref={sprite + '#icon-camper1'} />
              </svg>
              Van
            </Button>
          </li>
          <li>
            <Button>
              <svg width={40} height={28}>
                <use xlinkHref={sprite + '#icon-camper2'} />
              </svg>
              Fully <br /> Integrated
            </Button>
          </li>
          <li>
            <Button>
              <svg width={40} height={28}>
                <use xlinkHref={sprite + '#icon-camper3'} />
              </svg>
              Alcove
            </Button>
          </li>
        </FilterList>
      </ContainerType>
      <ButtonSearch>Search</ButtonSearch>
    </Container>
  );
};

export default Filters;
