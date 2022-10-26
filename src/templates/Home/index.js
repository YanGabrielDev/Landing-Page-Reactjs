import React, { useEffect } from "react";
import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { Base } from "../BaseTemplate";
import { mockBase } from "../BaseTemplate/stories";
import * as Styled from "./styles";
function Home() {
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        "http://localhost:1337/api/pages/?populate[menu][populate]=*&populate[sections][populate]=*"
      );
      const json = await data.json();
      console.log(json);
    };
    load();
  }, []);
  return <Base {...mockBase} />;
}

export default Home;
