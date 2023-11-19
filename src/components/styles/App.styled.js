import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 20px;
  min-height: 200px;
  width: 100%;

  ${({ iscentered }) =>
    iscentered === "true" &&
    `
  margin-top: auto;
  `}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  background: #1e3465;

  @media (min-width: ${({ theme }) => theme.md}) {
    height: 45vh;
  }
`;

export const NextEvent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
  min-height: 150px;

  @media (max-width: ${({ theme }) => theme.xs}) {
    min-height: 100px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 80px;
  margin-top: auto;

  @media (max-height: ${({ theme }) => theme.xs}) {
    margin-top: 160px;
  }
`;
