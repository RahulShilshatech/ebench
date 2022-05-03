import React from "react";
import { List, Divider, Grid, Card } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";

import Chart from "react-google-charts";
import Adminashboardlayout from "../Common/AdminDashboardLayout";
import CommonTabs from "../Common/Tabs";

const TabsContent = [
  {
    menuItem: "Recent Activities",
    render: () => (
      <div className="">
        <List className="personal">
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>{" "}
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>{" "}
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>{" "}
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>{" "}
          <List.Item>
            <div className="personal-detail">
              <div className="div-flex">
                <p>John Visit your Ad for Fullstack</p>
                <h4>April, 29 ,2021</h4>
              </div>
              <Divider />
            </div>
          </List.Item>
        </List>
      </div>
    ),
  },
  {
    menuItem: "Top Performing Ads",
    render: () => (
      <List className="education">
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for Full stack </p>
            <h4>800 views</h4>
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for Full stack </p>
            <h4>100 views</h4>
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for React developer </p>
            <h4>8000 views</h4>
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for Nodejs Developer </p>
            <h4>700 views</h4>
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for Java developer </p>
            <h4>8000 views</h4>
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <p>Advertisment for HR </p>
            <h4>80 views</h4>
          </div>
          <Divider />
        </List.Item>
      </List>
    ),
  },
];

export default () => {
  const history = useHistory();
  return (
    <>
      <Adminashboardlayout>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              {" "}
              <Card>
                <Chart
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Task", "Hours per Day"],
                    ["Work", 11],
                    ["Eat", 2],
                    ["Commute", 2],
                    ["Watch TV", 2],
                    ["Sleep", 7],
                  ]}
                  options={{
                    title: "My Daily Activities",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Card>
                <Chart
                  chartType="ComboChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      "Month",
                      "Bolivia",
                      "Ecuador",
                      "Madagascar",
                      "Papua New Guinea",
                      "Rwanda",
                      "Average",
                    ],
                    ["2004/05", 165, 938, 522, 998, 450, 614.6],
                    ["2005/06", 135, 1120, 599, 1268, 288, 682],
                    ["2006/07", 157, 1167, 587, 807, 397, 623],
                    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
                    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
                  ]}
                  options={{
                    title: "Monthly Coffee Production by Country",
                    vAxis: { title: "Cups" },
                    hAxis: { title: "Month" },
                    seriesType: "bars",
                    series: { 5: { type: "line" } },
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              {" "}
              <div
                className="stats"
                onClick={() => history.push("/managemanager")}
              >
                <div className="stats-content">
                  <i className="fas fa-ad" />
                  <div>
                    <p>Manage Manager</p>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                className="stats"
                onClick={() => history.push("/managerequiter")}
              >
                <div className="stats-content">
                  <i className="fas fa-ad" />
                  <div>
                    <p>Manage Requirter</p>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                className="stats"
                onClick={() => history.push("/managesubscribe")}
              >
                <div className="stats-content">
                  <i className="fas fa-ad" />
                  <div>
                    <p>Manage Subscription</p>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="profile-history">
          <CommonTabs menu={{ secondary: true }} panes={TabsContent} />
        </div>
      </Adminashboardlayout>
    </>
  );
};
