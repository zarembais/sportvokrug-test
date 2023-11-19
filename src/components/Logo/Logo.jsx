import {
  LogoWrapper,
  TextSport,
  TextVokrug,
  Image,
} from "../styles/Logo.styled";

const Logo = () => {
  return (
    <LogoWrapper>
      <Image src="/favicon.ico" alt="SportVokrug Logo" />
      <TextSport>Спорт</TextSport>
      <TextVokrug>вокруг.</TextVokrug>
    </LogoWrapper>
  );
};

export default Logo;
