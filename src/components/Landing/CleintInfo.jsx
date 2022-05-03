import React from "react";
import { Button } from "semantic-ui-react";

export default () => (
  <>
    <div className="cleints-info">
      <div className="center-div">
        <h3>Some of Our Clients</h3>
        <p>Find the worlds best agencies and freelancers for FREE</p>
        <div className="space-div">
          <Button basic inverted color="grey">
            Start a Profile
          </Button>
          <Button basic inverted color="grey">
            Search Profile
          </Button>
        </div>
      </div>
    </div>
  </>
);
