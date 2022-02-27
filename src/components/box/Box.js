import { Div, Inner, Img, Title, Description } from "./BoxStyle";

const Box = ({ img, title, children }) => {
  return (
    <Div>
      <Inner>
        <Img src={img} alt="" />
        <Title>{title}</Title>
        <Description>{children}</Description>
      </Inner>
    </Div>
  );
};

export default Box;
