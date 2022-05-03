import React, { useState } from "react";
import {
  Grid,
  Card,
  Button,
  Progress,
  List,
  Divider,
  Search,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import SidebarProject from "../SidebarProject";
import Navbar from "../Navbar";
import Cards from "../Common/Cards";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

export default () => {
  const [value, onChange] = useState(new Date());
  return (
    <Navbar>
      <SidebarProject>
        <div className="projectDetail">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <div className="FlexCrd">
                    <div className="img-div">
                      <img
                        src="https://www.bjumg.org/wp-content/uploads/2020/03/Facebook-Icon-Facebook-Logo-Social-Media-Fb-Logo-Facebook-Logo-PNG-and-Vector-with-Transparent-Background-for-Free-Download.png"
                        alt="Af"
                      />
                      <div>Facebook Inc</div>
                    </div>
                    <div>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </div>
                  <div className="FlexCrd">
                    <Button basic color="green">
                      In Progress
                    </Button>
                    <Button basic color="red">
                      High
                    </Button>
                  </div>
                  <div className="">
                    <p>Task Done: 20/25</p>
                    <Progress percent="12%" indicating />
                  </div>
                  <div className="Flex-Crd">
                    <Button basic color="blue">
                      IOS App
                    </Button>
                    <Button basic color="red">
                      UI/Ux App
                    </Button>
                  </div>
                  <div className="name">
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />

                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                    <img src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg" />
                  </div>
                  <div className="FlexCrd top1">
                    <Button basic color="yellow" content="DUE DATE 20 JUNE" />
                    <i class="far fa-star"></i>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <div className="task">
                    <h3>My Task (05)</h3>
                    <div className="scroll-task">
                      <List>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                        <List.Item>
                          <div className="FlexCrd">
                            01
                            <div>Platform</div>
                            <i class="far fa-check-circle"></i>
                          </div>
                          <Divider />
                        </List.Item>
                      </List>
                    </div>
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Calendar onChange={onChange} value={value} />
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="message-group mt-1">
            <div className="topname">
              <div>
                {" "}
                <h3>Messages</h3>
              </div>
            </div>
            <div className="div-scroll">
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://generated.photos/vue-static/home/feed/asian.png"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://images.generated.photos/2uT4HTbSltEDJvvDD_o3oarz5y0VTHxtILEp8ycekKc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NjE1MzAuanBn.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://generated.photos/vue-static/home/feed/asian.png"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>

              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://generated.photos/vue-static/home/feed/asian.png"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://images.generated.photos/2uT4HTbSltEDJvvDD_o3oarz5y0VTHxtILEp8ycekKc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NjE1MzAuanBn.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://www.thejapanguy.com/wp-content/uploads/2017/04/Asian-Faces-Quiz-Women-Queston-9-Bae-Jong-Ok-KOREAN.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://generated.photos/vue-static/home/feed/asian.png"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://images.generated.photos/PvAkJdJeKO5wRB_hFELFQprTrMNt3-P85ZXIW8c8l6E/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDAxNTguanBn.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://www.thejapanguy.com/wp-content/uploads/2017/04/Asian-Faces-Quiz-Women-Queston-9-Bae-Jong-Ok-KOREAN.jpg"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-content">
                  <div className="name">
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="https://generated.photos/vue-static/home/feed/asian.png"
                        alt="imgg"
                      />
                      <div className="status-active" />
                    </div>
                    <div>
                      <h5> Robin</h5>

                      <p>
                        There are 3 envs but staging and prod are not in use
                        yet.
                      </p>
                    </div>
                  </div>

                  <div className="time">05:54</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProject>
    </Navbar>
  );
};
