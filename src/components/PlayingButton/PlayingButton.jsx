import {
  StyledButton,
  StyledImg,
  StyledText,
} from "../styles/PlayingButton.styled";

const PlayingButton = () => {
  return (
    <StyledButton>
      <StyledText>Идет сейчас</StyledText>
      <StyledImg src="clocks.png" />
    </StyledButton>
  );
};

export default PlayingButton;
