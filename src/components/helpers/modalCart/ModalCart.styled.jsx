import styled from 'styled-components';

export const ContainerImg = styled.div`
  display: flex;
  gap: 16px;
  width: 290px;
  height: 310px;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  object-fit: none;
  border-radius: 10px;
`;

export const ContainerData = styled.div`
  width: 100%;
  height: 100%;
`;

export const NameAndPriceList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const NameAndPriceItem = styled.li`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828; // винести скрізь колір в глобально
  display: flex;
`;

export const RatingAndLocatList = styled.ul`
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
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
  margin-bottom: 44px;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-bottom: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
`;
