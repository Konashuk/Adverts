import styled from 'styled-components';

export const HeroImg = styled.div`
  padding: 24px;
  text-align: center;
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://ftp.goit.study/img/campers-test-task/11-1.webp');
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  color: #f2f4f7;
`;

export const Span = styled.span`
  color: #e44848;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Link = styled.a`
  display: block;
  margin: 0 auto;
  padding: 16px 40px;
  cursor: pointer;

  border-radius: 200px;
  width: 166px;
  background-color: #e44848;

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
