import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  color: white;
  width: 65vw;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => (lines ? lines : 1)};
  line-clamp: ${({ lines }) => (lines ? lines : 1)};
  -webkit-box-orient: vertical;
`;

export const Dates = styled.div`
  font-size: 18px;
  color: #98abbe;
  padding-top: 20px;
  letter-spacing: 1px;
`;
