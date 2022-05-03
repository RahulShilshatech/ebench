import React from "react";
import { Grid, Container, Card, Button } from "semantic-ui-react";
// import Select from "react-select";

import Navbar from "../Navbar";
import ProjectSidebar from "../ProjectSidebar";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default () => {
  return (
    <Navbar>
      <ProjectSidebar>
        <Container>
          <div className="task-management">
            <div className="prjct">
              <h3>Projects</h3>
              {/* <Select value="This Week" /> */}
            </div>

            <Grid divided="vertically">
              <Grid.Row columns={3}>
                <Grid.Column>
                  <div className="card-bg">
                    <div className="todo">
                      <div>
                        {" "}
                        <p>Pending</p>
                      </div>
                      <div className="crcle">2</div>
                    </div>
                    <div className="add-card">+</div>
                    <Card>
                      <div className="card-sec">
                        <h4>Design</h4>
                        <i className="fas fa-paperclip"></i>
                      </div>
                      <p>
                        We need 2 different concepts for a software page in our
                        program
                      </p>

                      <p>
                        I have two attached design you are In publishing and
                        graphic design, Lorem ipsum is a placeholder text
                        commonly used to ... Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit
                      </p>
                    </Card>
                    <Card>
                      <div className="card-sec">
                        <h4>Development</h4>
                      </div>

                      <p className="pt-2">
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures
                      </p>
                    </Card>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="card-bg">
                    <div className="todo">
                      <div>
                        {" "}
                        <p>In Progress</p>
                      </div>
                      <div className="crcle">2</div>
                    </div>
                    <div className="add-card">+</div>
                    <Card>
                      <div className="card-sec">
                        <h4>Design</h4>
                        <i className="fas fa-paperclip"></i>
                      </div>
                      <p>
                        We need 2 different concepts for a software page in our
                        program
                      </p>

                      <p>
                        I have two attached design you are In publishing and
                        graphic design, Lorem ipsum is a placeholder text
                        commonly used to ... Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit
                      </p>
                    </Card>
                    <Card>
                      <div className="card-sec">
                        <h4>Development</h4>
                      </div>

                      <p className="pt-2">
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures
                      </p>
                    </Card>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="card-bg">
                    <div className="todo">
                      <div>
                        {" "}
                        <p>Completed</p>
                      </div>
                      <div className="crcle">2</div>
                    </div>
                    <div className="add-card">+</div>
                    <Card>
                      <div className="card-sec">
                        <h4>Design</h4>
                        <i className="fas fa-paperclip"></i>
                      </div>
                      <p>
                        We need 2 different concepts for a software page in our
                        program
                      </p>

                      <p>
                        I have two attached design you are In publishing and
                        graphic design, Lorem ipsum is a placeholder text
                        commonly used to ... Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit
                      </p>
                    </Card>
                    <Card>
                      <div className="card-sec">
                        <h4>Development</h4>
                      </div>

                      <p className="pt-2">
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures
                      </p>
                    </Card>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </ProjectSidebar>
    </Navbar>
  );
};
