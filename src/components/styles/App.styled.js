import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 20px;
  height: 15%;
  min-height: 200px;
  width: 100%;

  // @media (max-height: ${({ theme }) => theme.tablet}) {
  //   height: 15vh;
  // }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55%;
  min-height: 400px;
  width: 100%;
  background: #1e3465;
`;

export const NextEvent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
  min-height: 200px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    min-height: 100px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 80px;
  // height: 5%;

  // margin-top: auto;
  // position: fixed;
  // bottom: 5px;
`;
