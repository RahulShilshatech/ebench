import React from "react";
import { Grid, List, Search, Select } from "semantic-ui-react";
import Navbar from "../Navbar";
import Cards from "./Cards";

function Meassage({ children }) {
  return (
    <Navbar>
      <div className="chat-section">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={4} className="mt-0">
              <div className="sidebar-message ">
                <div className="inner-flex">
                  {" "}
                  <i className="fas fa-cog" />
                  <i className="far fa-file" />
                  <i className="fas fa-file-alt" />
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="inner-content">
                  <Search value="search" className="field-search" />
                  <Select
                    placeholder="Select your country"
                    className="selct-type"
                  />
                  <div className="scroll">
                    <List>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                      <List.Item>
                        <Cards
                          borderRadius="12px 12px 0px 0px"
                          chat
                          image="https://generated.photos/vue-static/home/feed/asian.png"
                          name="Cremica"
                        />
                      </List.Item>
                    </List>
                  </div>{" "}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={12} className="pl-0">
              <div className="">{children}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Navbar>
  );
}

export default Meassage;
