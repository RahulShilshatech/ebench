import React from "react";
import { Grid, List, Container, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Sidebr({ user, children }) {
  return (
    <div className="flex bg-color">
      <Container className="mt-3">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="project-sidebar">
                <h3>Eclucus</h3>
                <List>
                  <List.Item>
                    <i class="fas fa-tasks"></i> My Task
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <i class="fas fa-calendar-week"></i> Calender
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <i class="fas fa-history"></i> Time Manage
                  </List.Item>
                  <Divider />
                  <List.Item>
                    <i class="fas fa-hotel"></i> Reports
                  </List.Item>
                  <Divider />

                  <List.Item>
                    <i class="fas fa-cog"></i>Settings
                  </List.Item>
                </List>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <div className="">{children}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Sidebr;
