import styled from "@emotion/styled";

export const Div = styled("div")({
  padding: "1rem .7rem",
  backgroundColor: "#C4C4C4",
  borderRadius: "3rem",
  cursor: 'pointer',
  height: '100%',
});

export const Inner = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dashed #585858",
  borderRadius: "3rem",
  padding: '1.4rem 3rem',
  textAlign: 'center',
  height: '100%'
});

export const Img = styled("img")({
  height: "auto",
  width: "4rem",
  paddingBottom: '1rem'
});

export const Title = styled("h3")({
  marginBottom: ".5rem",
  fontSize: "1.5rem",
});

export const Description = styled("p")({
  margin: 0,
  fontSize: "1.4rem",
});
