import styled from 'styled-components';

export const ContainerFeature = styled.div`
  width: 430px;
`;

export const FetureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
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

export const Svg = styled.svg`
  margin-right: 4px;
`;

export const Details = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
