import styled from "styled-components";
import { Grid } from "@smooth-ui/core-sc";

export const Wrapper = styled(Grid)`
  width: 100%;
  height: 100vh;
  background-image: url("./markus-spiske-445255-unsplash.jpg"),
    linear-gradient(
      to bottom,
      rgba(242, 221, 222, 1) 0%,
      rgba(241, 221, 222, 0.6) 1%,
      rgba(137, 171, 227, 0.6) 100%
    );

  display: flex;
  align-items: center;
`;
