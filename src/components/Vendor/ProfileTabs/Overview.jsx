import React from "react";
import { Card, Button, Grid } from "semantic-ui-react";

export default () => {
  return (
    <>
      <div className="overview-tab">
        <Card>
          <h3>Overview</h3>

          <div className="conteent">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div>
                    {" "}
                    <label>Register Company Name</label>
                    <span className="">S Tech</span>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <label>Website</label>
                    <span className="">None</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div>
                    {" "}
                    <label>Brand Name</label>
                    <span className="">Shilshatech</span>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <label>Domain Name</label>
                    <span className="">S Tech</span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Card>
        <Card>
          <h3>Social Profile</h3>
          <div className="soacil-link">
            {" "}
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
          </div>
        </Card>
      </div>
    </>
  );
};
