import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Card, Grid, Button, Divider } from "semantic-ui-react";
import AdminSidebar from "./AdminSidebar";
import Cards from "./Cards";

export default ({ children }) => {
  const history = useHistory();
  return (
    <AdminSidebar>
      <Grid divided="vertically ">
        <Grid.Row columns={2}>
          <Grid.Column width={11}>
            <Grid.Column width={10}>
              <Cards
                image="https://armourdigitalooh.com/wp-content/uploads/2020/02/5_Best_Practices.png"
                cardImageHeight="60px"
                marginBottom="2rem"
                h1={false}
              />
            </Grid.Column>
            {children}
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="stats" onClick={() => history.push("/v-advertise")}>
              <div className="stats-content">
                <i className="fas fa-ad" />
                <div>
                  <p>Manage Advertise</p>
                </div>
              </div>
            </div>
            <div className="stats" onClick={() => history.push("/vendorlist")}>
              <div className="stats-content">
                <i className="fas fa-ad" />
                <div>
                  <p>Manage Vendor</p>
                </div>
              </div>
            </div>
            <div className="stats" onClick={() => history.push("/manage-user")}>
              <div className="stats-content">
                <i className="fas fa-users" />
                <div>
                  <p>Manage User</p>
                </div>
              </div>
            </div>
            <div
              className="stats"
              onClick={() => history.push("/v-advertisment")}
            >
              <div className="stats-content">
                <i className="fas fa-history" />
                <div>
                  <Link to="/v-history">
                    {" "}
                    <p>Manage History</p>
                  </Link>
                </div>
              </div>
            </div>
            <Card className="img-con">
              <img
                src="https://armourdigitalooh.com/wp-content/uploads/2020/02/5_Best_Practices.png"
                alt="icoo"
              />

              <Card.Content>
                <Card.Header>Mode 1</Card.Header>
              </Card.Content>
              <div className="card-content ">
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Description>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Description>
                <Card.Content extra>
                  <div className="ui two buttons btn-group">
                    <Button basic color="grey">
                      <i className="fas fa-thumbs-up" /> Like
                    </Button>
                    <Button basic color="blue">
                      <i className="fas fa-heart" /> Love
                    </Button>
                    <Button basic color="yellow">
                      <i className="fas fa-download" /> Download
                    </Button>
                  </div>
                </Card.Content>
              </div>
            </Card>{" "}
            <div className="products">
              <p className="heading">Other products you may be interested</p>
              <Divider />
              <h3>Product 1</h3>
              <p className="small-text">
                Many desktop publishing packages and web page editors now.
              </p>
              <Button basic color="violet">
                Info
              </Button>
              <Divider />
              <h3>Product 2</h3>
              <p className="small-text">
                Many desktop publishing packages and web page editors now.
              </p>
              <Button basic color="violet">
                Info
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AdminSidebar>
  );
};
