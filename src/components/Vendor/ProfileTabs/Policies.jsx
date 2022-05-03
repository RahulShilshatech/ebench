import React from "react";
import { Card, Button, Input, Divider } from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="address-tab">
        <Card>
          <h3> Company Policies</h3>
          <p className="text-center">No Policies uploaded yet</p>
          <Divider />
          {!register && (
            <Button onClick={() => setRegister(!register)}>
              <i class="fas fa-plus-circle"></i>Add
            </Button>
          )}
          {register && (
            <div className="address">
              <div>
                {" "}
                <Input placeholder="Designation Title" />
              </div>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};
