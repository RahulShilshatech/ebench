import React from "react";
import { Button, Container, Select, Grid } from "semantic-ui-react";
import Chart from "react-google-charts";
import CommonTabs from "./Common/Tabs";
import Navbar from "./Navbar";
import InProgress from "./Candidate/InProgress";

const TabsContent = [
  {
    menuItem: "In progress",
    render: () => <InProgress />,
  },
  {
    menuItem: "Pending Payments",
    render: () => <div className="">dsv</div>,
  },
  {
    menuItem: "Completed",
    render: () => <div className="">dsv</div>,
  },
];
export default () => {
  return (
    <Navbar>
      <Container>
        <div className="income">
          <div className="top-content">
            <div className="flex-content">
              <img
                src="https://images.generated.photos/2uT4HTbSltEDJvvDD_o3oarz5y0VTHxtILEp8ycekKc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NjE1MzAuanBn.jpg"
                alt="profile"
              />
              <div className="pl-3">
                <h4>Good Morning Qaurz</h4>
                <p>here are your stars for today</p>
              </div>
            </div>
            <div>
              <Button basic color="grey" className="claenderAdd">
                <i className="fas fa-calendar-week" /> Today
              </Button>
              <span className="small-text">compare to</span>
              <Select placeholder="Previous Period" />
            </div>
          </div>
          <div className="revenue-card">
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column>
                  <div className="total">
                    <p>Total Renvue</p>
                    <h4>$234,32</h4>
                    <span className="">433 orders</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="total">
                    <p>Total Renvue</p>
                    <h4>$234,32</h4>
                    <span className="">433 orders</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="total">
                    <p>Total Renvue</p>
                    <h4>$234,32</h4>
                    <span className="">433 orders</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="total">
                    <p>Total Renvue</p>
                    <h4>$234,32</h4>
                    <span className="">433 orders</span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="">
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  {" "}
                  <Chart
                    width={"800px"}
                    height={"400px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Pizza", "Popularity"],
                      ["Pepperoni", 33],
                      ["Hawaiian", 26],
                      ["Mushroom", 22],
                      ["Sausage", 10], // Below limit.
                      ["Anchovies", 9], // Below limit.
                    ]}
                    options={{
                      title: "",
                      sliceVisibilityThreshold: 0.2, // 20%
                    }}
                    rootProps={{ "data-testid": "7" }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Chart
                    width={"800px"}
                    height={"400px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Pizza", "Popularity"],
                      ["Pepperoni", 33],
                      ["Hawaiian", 26],
                      ["Mushroom", 22],
                      ["Sausage", 10], // Below limit.
                      ["Anchovies", 9], // Below limit.
                    ]}
                    options={{
                      title: "",
                      sliceVisibilityThreshold: 0.2, // 20%
                    }}
                    rootProps={{ "data-testid": "7" }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="progress">
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column width={10}>
                  {" "}
                  <CommonTabs
                    menu={{ secondary: true, pointing: true }}
                    panes={TabsContent}
                  />
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className="center-meter">
                    {" "}
                    <img src="/images/112.png" alt="shhs" />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
