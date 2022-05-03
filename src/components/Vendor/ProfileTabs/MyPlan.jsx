import React from "react";
import { Grid, Container, Card, Button } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <div className="subscription">
        <div className="scroll-sub">
          <Grid divided="vertically">
            <Grid.Row columns={4}>
              <Grid.Column>
                <Card>
                  <div className="center">
                    <img
                      src="https://kredily.com/wp-content/uploads/2020/06/Group-3318.png"
                      alt="hkh"
                    />
                    <h2>FEATURES</h2>
                    <div className="spacer" />
                  </div>
                  <div className="info">
                    <ul>
                      <li>HR Management</li>
                      <li>Reminders & Alerts</li>
                      <li>Automated Birthday Greetings</li>
                      <li> Anniversary Greetings</li>
                      <li> Employee Self Onboarding with Docs</li>
                      <li> Login Using OTP </li>
                      <li> Data Storage </li>
                      <li> Employee Database Management</li>

                      <li> Employee Data Verification Dashboard</li>
                    </ul>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="center">
                    <img
                      src="https://kredily.com/wp-content/uploads/2020/07/group-44.png"
                      alt="hkh"
                    />
                    <h2>FREE FOREVER</h2>
                    <p>No Hidden charges</p>
                    <p> ₹0 / Month</p>
                    <p> No credit card required</p>
                  </div>
                  <div className="info">
                    <ul>
                      <li>Yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li> 250 MB</li>
                      <li> Add On: Rs.10/User/Month </li>
                      <li> -</li>

                      <li> 250 MB</li>
                    </ul>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="center">
                    <img
                      src="https://kredily.com/wp-content/uploads/2020/06/4nLch4.tif@2x.png"
                      alt="hkh"
                    />
                    <h2>PROFESSIONAL</h2>
                    <p>₹1499/Month/upto 25 employees</p>
                    <p> ₹0 / Month</p>
                    <p>₹40 per additional employee 51+</p>
                  </div>
                  <div className="info">
                    <ul>
                      <li>Yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li> 250 MB</li>
                      <li> Add On: Rs.10/User/Month </li>
                      <li> -</li>

                      <li> 250 MB</li>
                    </ul>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="center">
                    <img
                      src="https://kredily.com/wp-content/uploads/2020/06/A7sy4Q.tif@2x.png"
                      alt="hkh"
                    />
                    <h2>ENTERPRISE</h2>
                    <p>Contact Us</p>
                    <p> For Custom Pricing</p>
                    <p> required</p>
                  </div>
                  <div className="info">
                    <ul>
                      <li>Yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li>yes</li>
                      <li> 250 MB</li>
                      <li> Add On: Rs.10/User/Month </li>
                      <li> -</li>

                      <li> 250 MB</li>
                    </ul>
                  </div>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="plan">
          <h3>Plan Summary</h3>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <div className="plan-div">
                  <div>
                    <p> Requsted Plan</p>
                    <p> Requsted Plan</p>
                  </div>
                  <div>
                    <p> Requsted Plan</p>
                    <p> Requsted Plan</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                {" "}
                <div className="plan-div">
                  <div>
                    <p> Add ons</p>
                    <p> Total Add on price</p>
                    <p> Plan price</p>
                  </div>
                  <div>
                    <p> ₹0/user/month</p>
                    <p> ₹0/user/month</p>
                    <p> ₹0/user/month</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="center-plan">
                  <p>Total ₹ 0 /month</p>
                  <Button primary>SEnd Request</Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="conditions">
            <p>Conditions Apply :</p>
            <p>
              * Max. redeemable credits INR 4,999/month against first 100
              employees
            </p>
            <p>
              * Professional Plan availed through offers is valid only for
              active usage of account, i.e., minimum 50% employees using the
              platform on monthly basis
            </p>
            <p>* Minimum billing of INR 999/month</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
