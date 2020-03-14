import React from "react";
import { Link } from "@reach/router";
import colors from "./colors";

// const spin = keyframes`
//     to {
//         transform: rotate(360deg);
//     }
// `;

const logo = {
  fontSize: "60px",
  display: "inline-block"
};

const cssHeader = {
  backgroundColor: colors.secondary,
  padding: "15px",
  marginBottom: "20px"
};

const NavBar: React.FunctionComponent = () => {
  return (
    <header style={cssHeader}>
      <Link to="/">Adopt Me!</Link>
      <span
        style={logo}
        // css={css`
        //   font-size: 60px;
        //   display: inline-block;
        //   &:hover {
        //     animation: 1s ${spin} linear infinite;
        //   }
        // `}
        role="img"
        aria-label="logo"
      >
        🐱
      </span>
    </header>
  );
};

export default NavBar;
