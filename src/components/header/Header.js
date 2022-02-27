import { Div, Title, Subtitle } from "./HeaderStyle";

const Header = ({ title, subtitle }) => {
  return (
    <Div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Div>
  );
};

export default Header;
