import React from "react";
import { Input, Button } from "semantic-ui-react";

export default () => (
  <>
    <div className="landing">
      <div className="inner-content">
        <div className="inner-text">
          <h3>Your Office Building Brain</h3>
          <p>
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </p>
          <div className="flex">
            <Input placeholder="your company email..." />
            <Button primary className="btn-blue">
              Primary
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>
);
