import React from "react";
import { Grid, List, Container, Divider } from "semantic-ui-react";
import Navbar from "../Navbar";

function AdminSidebar({ children }) {
  return (
    <Navbar>
      <div className="flex mt-3">
        <Container>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width={4}>
                <div className="sidebar ">
                  <div className="profile">
                    <div className="logo">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="icoo"
                      />
                      <h5>Jaco Henry</h5>
                      <p>CTO</p>
                      <p>Xyz Pvt. Ltd.</p>
                      <div className="status-background">
                        <div className="online-status" />
                      </div>
                    </div>
                  </div>

                  <div className="contact-info">
                    <div className="flex-div">
                      <div>
                        {" "}
                        <h5>Contact Information</h5>
                      </div>
                      <div>
                        <i className="fas fa-ellipsis-v" />
                      </div>
                    </div>
                    <Divider />
                    <List>
                      <List.Item>
                        <i className="fas fa-envelope-square" />
                        jyollee655@gmail.com
                      </List.Item>
                      <Divider />
                      <List.Item>
                        <i className="fas fa-phone" />
                        +947777544
                      </List.Item>
                      <Divider />
                      <List.Item>
                        <i className="fas fa-suitcase-rolling" />9 to 5 months
                      </List.Item>
                      <Divider />
                      <List.Item>
                        <i className="fas fa-paper-plane" />
                        Mumbai
                      </List.Item>
                    </List>
                  </div>
                  <div className="social-links">
                    <div className="flex-div">
                      <div>
                        {" "}
                        <h5>Find Me Here</h5>
                      </div>
                      <div>
                        <i className="fas fa-ellipsis-v" />
                      </div>
                    </div>
                    <List>
                      <Divider />

                      <List.Item>
                        <i className="fab fa-linkedin-in" />
                        Linkdin.com/adf/jyollee
                      </List.Item>
                      <Divider />

                      <List.Item>
                        <i className="fab fa-twitter" />
                        twitter.com/ef/jyob.com
                      </List.Item>
                      <Divider />
                    </List>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={12}>
                <div className="p-2">{children}</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </Navbar>
  );
}

export default AdminSidebar;
