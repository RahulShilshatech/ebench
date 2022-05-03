import React from "react";
import { Grid, List, Container, Divider } from "semantic-ui-react";

function Sidebr({ children }) {
  return (
    <div className="flex">
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="advertise-sidebar ">
                <p>Advertisement</p>
                <List>
                  <List.Item>
                    <i className="fas fa-columns" />
                    Dashboard
                  </List.Item>
                  <Divider />

                  <List.Item>
                    <i className="fas fa-chart-area" />
                    Analitics
                  </List.Item>
                  <Divider />

                  <List.Item>
                    <i className="fas fa-book-open" />
                    Trending
                  </List.Item>
                  <div className="bottom-div">
                    <Divider />
                    <List.Item>
                      <i className="fas fa-cog" />
                      Settings
                    </List.Item>
                  </div>
                </List>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <div className="p-2">{children}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Sidebr;
