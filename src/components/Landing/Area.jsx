import React from "react";
import { Button, Container } from "semantic-ui-react";
import { GridDetailConst2 } from "../../utils/constants";

import GridContainer from "../Common/Grid";

export default () => (
  <>
    <div className="">
      <Container>
        <div className="area">
          <h4 className="text-center">
            A personalized engine to help you hire the best developers.
          </h4>
          <GridContainer dataArray={GridDetailConst2} gridColumns={3} image />

          <div className="text-center mt-2">
            <Button primary className="start-button">
              Get Started
            </Button>
            <h3>
              If youd rather look through our research youself, please refer to
              the companies listed below.
            </h3>
          </div>
        </div>
      </Container>
      ;
    </div>
  </>
);
