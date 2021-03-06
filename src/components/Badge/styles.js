import styled from 'styled-components';
import { above, colors } from '../../GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 4px;
  background: white;

  ${above.mediumL`
    width: 420px;
  `};
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: ${colors.darkBlue};
`;

const Box = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 10px;
  display: flex;
  align-items: center;

  p {
    margin: 0;

    span {
      color: ${colors.lightBlue};
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${colors.darkBlue};
  color: ${colors.lightBlue};
`;

export { Container, Header, Box, Footer };
