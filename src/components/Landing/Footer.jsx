import React from "react";
import { List, Container, Grid } from "semantic-ui-react";

export default () => (
  <>
    <div className="footer">
      <Container>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <h3>eBench</h3>
            </Grid.Column>
            <Grid.Column>
              {" "}
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <h4>Talent</h4>
                    <List>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <h4>eBench</h4>
                    <List>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <h4>More</h4>
                    <List>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                      <List.Item>Team</List.Item>
                      <List.Item> Carrers</List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column className="">
              <h4>Social</h4>
              <List className="social-links">
                <List.Item>
                  <div className="circle">
                    <i className="fab fa-facebook-f" />
                  </div>
                </List.Item>
                <List.Item>
                  {" "}
                  <div className="circle">
                    <i className="fab fa-twitter" />
                  </div>
                </List.Item>
                <List.Item>
                  <div className="circle">
                    <i className="fab fa-linkedin-in" />
                  </div>
                </List.Item>
                <List.Item>
                  <div className="circle">
                    {" "}
                    <i className="fab fa-google-plus-g" />
                  </div>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  </>
);
