import styled from "styled-components";

export const TextSport = styled.p`
  color: rgba(255, 255, 255, 0.91);
  font-family: "PT Sans", sans-serif;
  font-size: 31px;
  line-height: 37px;
  letter-spacing: -0.2px;
  padding-left: 5px;
  font-weight: bold;
`;

export const TextVokrug = styled(TextSport)`
  color: rgba(6, 153, 212, 1);
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  padding: 0.5em;
  will-change: filter;
  transition: filter 300ms;

  &&:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  `;
  // ${(props) =>
  //   props.istop === "false" &&
  //   css`
  //     position: fixed;
  //     bottom: 5px;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     background: rgba(255, 255, 255, 0.2);
      
  //   `}

