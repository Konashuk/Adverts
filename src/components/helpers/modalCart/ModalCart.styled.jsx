import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 24px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  margin-bottom: 32px;
`;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ContainerData = styled.div`
  width: 100%;
  height: 100%;
`;

export const NameAndPriceList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const NameAndPriceItem = styled.li`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828; // винести скрізь колір в глобально
  display: flex;
`;

export const ButtonHurt = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RatingAndLocatList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const RatingAndLocatItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
  display: flex;
  align-items: center;
  &:last-child {
    text-decoration: none;
  }
`;

export const Svg = styled.svg`
  margin-right: 4px;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;

  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

export const FetureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FetureItem = styled.li`
  border-radius: 100px;
  /* width: 126px; */
  padding: 12px 18px;
  height: 44px;
  background-color: #f2f4f7;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 200px;
  width: 166px;
  height: 56px;
  background-color: #e44848;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #d84343;
  }
`;
