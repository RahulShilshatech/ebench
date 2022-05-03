import React from "react";
import { Card, Button, Input } from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  const [register1, setRegister1] = useState(false);

  const [register2, setRegister2] = useState(false);

  return (
    <>
      <div className="address-tab">
        <Card>
          <h3>Departments</h3>
          <div className="department">
            <h4>Departments</h4>
            <h4> Sub Departments</h4>

            <h4>Employees</h4>
          </div>
          <Button onClick={() => setRegister(!register)}>
            <i class="fas fa-plus-circle"></i>Add
          </Button>
          {/* {!register && (
            <Button onClick={() => setRegister(!register)}>
              <i class="fas fa-plus-circle"></i>Add
            </Button>
          )}
          {register && (
            <div className="address">
              <div>
                {" "}
                <Input placeholder="Address Line 1" />
              </div>

              <div className="mt-2">
                {" "}
                <Input placeholder="Address Line 2" />
              </div>
              <div className="address-field">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="Country" />
                <Input placeholder="Pin Code" />
              </div>
              <div className="button-div mt-2">
                <Button content>Cancel</Button>
                <Button primary>Save</Button>
              </div>
            </div>
          )} */}
        </Card>
      </div>
    </>
  );
};
