import React from "react";
import { Card, Button, Input, List } from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="admin-tab">
        <Card>
          <h3>ceo</h3>
          <div className="admin">
            <p>CEO is the head of the organization.</p>
            <p>CEO is the head of the organization.</p>
            <p>
              CEO is also the HR Admin.
              <br /> CEOs permissions apply to all employees.
            </p>
            <p>CEO can:</p>
            <List>
              <List.Item>View all employee profile information</List.Item>
              <List.Item>
                {" "}
                View sensitive employee information (such as PAN Card, IDs and
                salary)
              </List.Item>
              <List.Item> Edit employee profiles</List.Item>
              <List.Item>
                {" "}
                Edit, Upload and Approve Attendance and Leaves
              </List.Item>
              <List.Item>
                Create and remove admins, and edit admin permissions
              </List.Item>
            </List>
            <div className=" address-tab">
              {!register && (
                <Button onClick={() => setRegister(!register)}>
                  <i class="fas fa-plus-circle"></i>Add
                </Button>
              )}
              {register && (
                <div className="address">
                  <div>
                    <h5>Find Employee</h5> <Input placeholder="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
        <Card>
          <h3>hr admin</h3>
          <div className="admin">
            <p>HR Admin's permissions apply to all employees.</p>

            <p>This admin can:</p>
            <List>
              <List.Item>View all employee profile information</List.Item>
              <List.Item>
                {" "}
                View sensitive employee information (such as PAN Card, IDs and
                salary)
              </List.Item>
              <List.Item> Edit employee profiles</List.Item>
              <List.Item>
                {" "}
                Edit, Upload and Approve Attendance and Leaves
              </List.Item>
              <List.Item>
                Create and remove admins, and edit admin permissions
              </List.Item>
            </List>
            <div className=" address-tab">
              {!register && (
                <Button onClick={() => setRegister(!register)}>
                  <i class="fas fa-plus-circle"></i>Add
                </Button>
              )}
              {register && (
                <div className="address">
                  <div>
                    <h5>Find Employee</h5> <Input placeholder="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
        <Card>
          <h3>finance admin</h3>
          <div className="admin">
            <p>Finance admin's permissions apply to all employees.</p>

            <p>This admin can:</p>
            <List>
              <List.Item>
                {" "}
                View salary and bank details of employee profiles
              </List.Item>
              <List.Item>
                {" "}
                View sensitive employee information (such as PAN Card and IDs)
              </List.Item>
            </List>
            <div className=" address-tab">
              {!register && (
                <Button onClick={() => setRegister(!register)}>
                  <i class="fas fa-plus-circle"></i>Add
                </Button>
              )}
              {register && (
                <div className="address">
                  <div>
                    <h5>Find Employee</h5> <Input placeholder="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
