import styled from 'styled-components';
// const MainPageDecktop = '../img/MainPageDecktop.png';
import MainPageDecktop from '../img/MainPageDecktop.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;
export const WrapHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  padding: 0;
  background-color: #e3f2fd;
`;
export const WrapRender = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  background-image: url(${MainPageDecktop});
  background-size: 1440px 432px;
  background-repeat: no-repeat;
  background-position: bottom;
  object-fit: cover;
`;

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
