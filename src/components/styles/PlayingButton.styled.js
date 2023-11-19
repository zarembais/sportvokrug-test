import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d8d44;
  border: 1px solid #2c7c33;
  border-radius: 15px;
  width: 451px;
  height: 107px;

  @media (max-width: ${({ theme }) => theme.xs}) {
    width: 320px;
  }
`;

export const StyledImg = styled.img`
  width: 66px;
  height: 62px;
  padding-left: 20px;
`;

export const StyledText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;
  text-align: left;
  color: #ffffff;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.xs}) {
    font-size: 24px;
  }
`;
