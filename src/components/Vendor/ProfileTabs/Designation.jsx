import React from "react";
import { Card, Button, Input } from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="address-tab">
        <Card>
          <h3>Designation</h3>
          <div className="department">
            <h4>Designation</h4>
            <h4> Sub Departments</h4>
          </div>
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
