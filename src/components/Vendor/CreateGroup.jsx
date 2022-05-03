import React from "react";
import { Table, Container, Button, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  return (
    <Navbar>
      <Container>
        <div className="historyVendor mt-2">
          <div className="Flex-name">
            <Search />
            <div className="create-scedule">
              <Button primary className="btn-schedule">
                Create Group
              </Button>
            </div>
          </div>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Members</Table.HeaderCell>
                <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                <Table.HeaderCell>Add Members</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Link to="/grouphistory">React js</Link>
                </Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node js</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>React js</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node js</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>React js</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Node js</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>
                  <div className="d-flx">
                    {" "}
                    <i className="fas fa-pen" />
                    <i className="fas fa-trash-alt" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button primary className="btn-schedule">
                    Add
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Container>
    </Navbar>
  );
};
