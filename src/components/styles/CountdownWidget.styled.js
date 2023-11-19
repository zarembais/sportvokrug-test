import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 10px 20px;
  gap: 10px;

  // @media (max-width: ${({ theme }) => theme.mobile}) {
  //   flex-direction: column;
  // }
`;
