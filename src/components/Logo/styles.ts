import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  background: "$primary_800",
  width: "45px",
  height: "45px",
  borderRadius: "$md",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  h3: {
    fontSize: "$header_4",
    fontWeight: "$header_3",
    color: "$light_300",
  },
});
