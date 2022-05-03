import React from "react";
import { Grid, Container, Step } from "semantic-ui-react";
// import { Link } from "react-router-dom";

function Sidebr({ children }) {
  return (
    <div className="flex bg-color">
      <Container className="mt-3">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="project-sidebar">
                <Step.Group vertical>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-download" /> Getting Started
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>

                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-clipboard-list" /> Categories
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-dumbbell" /> Expertise
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-dumbbell" /> Expertise Level
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-school" /> Education
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-grip-vertical" /> Employement
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-microphone" /> Languase
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-dollar-sign" /> Hourly Rates
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-user" /> Title & Overview
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-user-circle" /> Profile Photo
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                  <Step completed>
                    <Step.Content>
                      <Step.Title>
                        <i className="fas fa-map-marker-alt" /> Location
                      </Step.Title>
                    </Step.Content>
                    <div className="ico">
                      <i className="far fa-check-circle" />
                    </div>
                  </Step>
                </Step.Group>
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
