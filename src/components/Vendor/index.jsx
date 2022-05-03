import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { List, Divider, Grid, Card } from "semantic-ui-react";
import Chart from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import Vendordashboardlayout from "../Common/Vendordashboardlayout";
import CommonTabs from "../Common/Tabs";
import { currentUserDetail } from "../../redux/actions/userAction";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    async function getCurrentUser() {
      await dispatch(currentUserDetail());
    }
    getCurrentUser();
  }, []);
  const history = useHistory();

  return (
    <Vendordashboardlayout currentUser={user?.currentUser?.data}>
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
            {/* <div
              className="stats"
              onClick={() => history.push("/purchaseorder")}
            >
              <div className="stats-content">
                <i className="fas fa-history" />
                <div>
                  {" "}
                  <p>Purchase</p>
                </div>
              </div>
            </div> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width={5}>
            {" "}
            <div className="stats" onClick={() => history.push("/schedule")}>
              <div className="stats-content">
                <i className="fas fa-history" />
                <div>
                  {" "}
                  <p>Schedule</p>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            {" "}
            <div
              className="stats"
              onClick={() => history.push("/purchaseorder")}
            >
              <div className="stats-content">
                <i className="fas fa-history" />
                <div>
                  {" "}
                  <p>Purchase</p>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            {" "}
            <div
              className="stats"
              onClick={() => history.push("/manageinterview")}
            >
              <div className="stats-content">
                <i className="fas fa-history" />
                <div>
                  {" "}
                  <p>Interview</p>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="profile-history">
        <CommonTabs menu={{ secondary: true }} panes={TabsContent} />
      </div>
    </Vendordashboardlayout>
  );
};
