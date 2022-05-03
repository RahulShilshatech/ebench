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
          <h3>Registered Office</h3>
          {!register && (
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
          )}
        </Card>
        <Card>
          <h3>Cooperate Office</h3>
          {!register1 && (
            <Button onClick={() => setRegister1(!register1)}>
              <i class="fas fa-plus-circle"></i>Add
            </Button>
          )}
          {register1 && (
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
          )}
        </Card>
        <Card>
          <h3>Custom Address Title</h3>
          {!register2 && (
            <Button onClick={() => setRegister2(!register2)}>
              <i class="fas fa-plus-circle"></i>Add
            </Button>
          )}
          {register2 && (
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
          )}
        </Card>
      </div>
    </>
  );
};
