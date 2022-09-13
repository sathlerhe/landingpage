import { styled } from "../../../../stitches.config";

export const Container = styled("header", {
  paddingTop: "40px",
  background: "$light_100",
  paddingBottom: "30px",
  width: "100%",
  zIndex: "1",
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$huge",
});

export const HeaderLinks = styled("div", {
  display: "flex",
  gap: "$md",
});
