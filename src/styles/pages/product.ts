import { styled } from "@stitches/react";

export const ProductContainer = styled("main", {
  display: "flex",
  alignItems: "stretch",
  maxWidth: "1180px",
  gap: "4rem",
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 656,
  maxWidth: 576,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 6,
  padding: "0.25rem",

  img: {
    objectFit: "cover", // evita distorção da imagem
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "@md",
    lineHeight: "1.6rem",
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    background: "$green500",
    color: "$white",
    borderRadius: 6,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});
