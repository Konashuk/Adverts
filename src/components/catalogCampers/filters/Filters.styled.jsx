import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
`;

export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;
  background-color: #f7f7f7;
  border: none;
`;

export const SvgPin = styled.svg`
  position: absolute;
  top: 50px;
  left: 18px;
`;

export const ContainerEquipment = styled.div`
  margin-bottom: 32px;
`;

export const ContainerType = styled.div`
  margin-bottom: 64px;
`;

export const FilterText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const EquipmentItem = styled.li``;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  cursor: pointer;
  height: 95px;
  min-width: 112px;
  word-wrap: break-word;

  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    border: 1px solid #e44848;
  }
`;

export const ButtonSearch = styled.button`
  border-radius: 200px;
  width: 166px;
  height: 56px;
  background-color: #e44848;
  border: none;

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
