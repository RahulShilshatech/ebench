import React from "react";
import { Container } from "semantic-ui-react";
import { GridDetailConst1 } from "../../utils/constants";

import GridContainer from "../Common/Grid";

export default () => (
  <>
    <Container>
      <div className="slider-panel">
        <GridContainer dataArray={GridDetailConst1} gridColumns={4} icon />
      </div>
    </Container>
  </>
);
