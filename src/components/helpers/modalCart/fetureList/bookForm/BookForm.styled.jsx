import styled from 'styled-components';

export const Heading = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const TextForm = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  background-color: #f7f7f7;
  border: none;
  margin-bottom: 14px;
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;
  background-color: #f7f7f7;
  border: none;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border-radius: 200px;
  width: 160px;
  height: 56px;
  cursor: pointer;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #360707;
  background-color: #e44848;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #d84343;
  }
`;
