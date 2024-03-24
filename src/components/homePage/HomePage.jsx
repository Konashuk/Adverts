import { HeroImg, Text, Span } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <HeroImg>
        <Text>
          We are your reliable partner in making these dreams come true!
          <Span>Travel Mobile</Span> offers a wide range of comfortable campers
          for rent to make your travels even brighter and more unforgettable.
        </Text>
        {/* <Link to="/filters"> Camper Car</Link> */}
      </HeroImg>
    </div>
  );
};

export default HomePage;
