/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .button {
    width: 120px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: ${colors.green};
    color: #fff;
    text-decoration: none;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 120px;
  margin: 10px 0;
  padding: 10px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${above.mediumL`
    flex-direction: row;
  `};
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  padding: 4px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  ${above.mediumL`
    width: 500px;
    margin: 0 0 0 10px;
  `};
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    width: 420px;
    height: 140px;
    margin: 5px 8px;
    background: #f6f8f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: black;
    text-decoration: none;

    .link {
      text-decoration: none;
    }
  }
`;

export { Container, Box, Input, List };
