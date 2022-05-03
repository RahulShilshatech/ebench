import React from "react";
import { Container } from "semantic-ui-react";

import { GridDetailConst3 } from "../../utils/constants";

import GridContainer from "../Common/Grid";

export default () => (
  <>
    <div className="hiring-section">
      <Container>
        <div className="text-center">
          <h5>Let us Help you</h5>
          <p>What type of hire are you making?</p>
        </div>
        <GridContainer dataArray={GridDetailConst3} gridColumns={4} image />
      </Container>
    </div>
  </>
);
