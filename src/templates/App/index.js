import React from "react";
import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { Base } from "../BaseTemplate";
import { mockBase } from "../BaseTemplate/stories";
import * as Styled from "./styles";
function Home() {
  return <Base {...mockBase} />;
}

export default Home;
