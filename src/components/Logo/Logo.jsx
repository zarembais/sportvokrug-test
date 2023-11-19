import {
  LogoWrapper,
  TextSport,
  TextVokrug,
  Image,
} from "../styles/Logo.styled";

const Logo = ({ istop }) => {
  return (
    <LogoWrapper istop={istop}>
      <Image src="/favicon.ico" alt="SportVokrug Logo" />
      <TextSport>Спорт</TextSport>
      <TextVokrug>вокруг.</TextVokrug>
    </LogoWrapper>
  );
};

export default Logo;
