import { StylesButton, Text } from './Button.styled';

const Button = ({ text, onClick, width }) => {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <Text>{text}</Text>
    </StylesButton>
  );
}

export default Button;