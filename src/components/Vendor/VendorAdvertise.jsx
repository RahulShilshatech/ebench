import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  Container,
  Card,
  Divider,
  Select,
} from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";
import Chart from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Common/Cards";
import Navbar from "../Navbar";
import NewAdvertisement from "./NewAdvertisement";
import { getAdvertiseList } from "../../redux/actions/advertiseAction";

export default function ADvertide() {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [openAdvertModal, setopenAdvertModal] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const Advert = useSelector((state) => state.advertise);

  const history = useHistory();
  useEffect(() => {
    async function getVendorAdvertise() {
      await dispatch(getAdvertiseList());
    }
    getVendorAdvertise();
  }, []);
  return (
    <Navbar>
      <div className="history-tags">
        <div className="tags">
          <Select placeholder="Posted" />
          <Select placeholder="Expired" />
          <Select placeholder="Active" />
          <Select placeholder="Coming Up" />
          <Select placeholder="Search" />

        </div>{" "}
      </div>
      <Container className="mt-3">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={12}>
              <div className="top-content">
                <p>Dream Horizon</p>
                <i
                  className="fas fa-edit"
                  onClick={() => setopenAdvertModal(!openAdvertModal)}
                />
              </div>
              {/* <Grid divided="vertically"> */}
              <Card className="card-graph">
                <Chart
                  width="850px"
                  height="200px"
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
            <Grid.Column width={4} className="advertse">
              {" "}
              <div
                className="stats"
                onClick={() => history.push("/v-dasbhoard")}
              >
                <div className="stats-content">
                  <i className="fas fa-home" />
                  <div>
                    <p>Home</p>
                  </div>
                </div>
              </div>
              <div
                className="stats"
                onClick={() => history.push("/manageadvertise")}
              >
                <div className="stats-content">
                  <i className="fas fa-users" />
                  <div>
                    <p>Manage Team</p>
                  </div>
                </div>
              </div>
              <div className="stats" onClick={() => history.push("/v-history")}>
                <div className="stats-content">
                  <i className="fas fa-history" />
                  <div>
                    {" "}
                    <p>Manage History</p>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid divided="vertically" className="bg-white">
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <div className="advertise-sidebar ">
                <List>
                  <List.Item
                    className="active"
                    onClick={() => {
                      setShowDropdown(!showDropdown);
                      setShowDropdown1(false);
                      setShowDropdown2(false);
                      // setAnimation();
                    }}
                  >
                    <i className="fas fa-columns" />
                    Catagories 1
                  </List.Item>
                  {showDropdown && (
                    <div
                      id="submenu"
                      className={`${
                        showDropdown ? "open dropdown-menu" : "dropdown-menu"
                      }`}
                    >
                      <List.Item id="submenu" className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                    </div>
                  )}

                  <Divider />
                  <List.Item
                    className="active"
                    onClick={() => {
                      setShowDropdown1(!showDropdown1);
                      setShowDropdown(false);
                      setShowDropdown2(false);
                      // setAnimation();
                    }}
                  >
                    <i className="fas fa-chart-area" />
                    Advertisement 2
                  </List.Item>
                  {showDropdown1 && (
                    <div
                      id="submenu"
                      className={`${
                        showDropdown1 ? "open dropdown-menu" : "dropdown-menu"
                      }`}
                    >
                      <List.Item id="submenu" className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                    </div>
                  )}
                  <Divider />
                  <List.Item
                    className="active"
                    onClick={() => {
                      setShowDropdown2(!showDropdown2);
                      setShowDropdown(false);
                      setShowDropdown1(false);
                      // setAnimation();
                    }}
                  >
                    <i className="fas fa-book-open" />
                    Advertisement 3
                  </List.Item>
                  {showDropdown2 && (
                    <div
                      id="submenu"
                      className={`${
                        showDropdown2 ? "open dropdown-menu" : "dropdown-menu"
                      }`}
                    >
                      <List.Item id="submenu" className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                      <List.Item className="inner-list">
                        Sub Catagories 1
                      </List.Item>
                    </div>
                  )}
                </List>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  {Advert?.vendorAdvertise?.data?.map((ad) => (
                    <Grid.Column width={8}>
                      <div className="overlay">
                        <Cards
                          image="https://blog.ipleaders.in/wp-content/uploads/2020/04/advertising-agency-e1586694068452.jpg"
                          cardImageHeight="230px"
                          text={ad.advertiseName}
                          borderRadius="12px 12px 0px 0px"
                          h1
                        />
                        <div className="middle">
                          <List>
                            <List.Item>
                              <i className="fas fa-trash-alt" />
                            </List.Item>
                            <List.Item>
                              <i className="fas fa-pen" />
                            </List.Item>
                            <List.Item>
                              <i className="fas fa-ban" />
                            </List.Item>
                            <List.Item>
                              <i className="fas fa-eye" />
                            </List.Item>
                          </List>
                        </div>
                      </div>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <NewAdvertisement
          open={openAdvertModal}
          onClose={() => setopenAdvertModal(!openAdvertModal)}
        />
      </Container>
    </Navbar>
  );
}
