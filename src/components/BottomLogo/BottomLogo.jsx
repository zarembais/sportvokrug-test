import styled from "styled-components";

const BottomLogo = () => {
  return (
    <LogoWrapper className="logo">
      <Image src="/favicon.ico" alt="SportVokrug Logo" />
      <TextSport>Спорт</TextSport>
      <TextVokrug>вокруг.</TextVokrug>
    </LogoWrapper>
  );
};

export default BottomLogo;

const TextSport = styled.p`
  color: rgba(255, 255, 255, 0.91);
  font-family: "PT Sans", sans-serif;
  font-size: 31px;
  line-height: 37px;
  letter-spacing: -0.2px;
  padding-left: 5px;
  font-weight: bold;
`;

const TextVokrug = styled(TextSport)`
  color: rgba(6, 153, 212, 1);
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  // position: fixed;
  bottom: 10px;
`;