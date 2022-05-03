import React from "react";
// import { Card } from "semantic-ui-react";
import Styled from "styled-components";
import { Card, Image, Grid } from "semantic-ui-react";

const CardHead = Styled.h1`
// color: black
`;
const CardContainer = Styled.div`


`;
const CardImage = Styled.div`
height: 100%;
min-height:${(props) => props.cardImageHeight};
background: url(${(props) => props.image});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "12px")};
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
&:hover  {
    opacity: 0.8;
    
  }
`;
const CardImageContainer = Styled.div`
background: #000;
border-radius: 17px;
`;
const CardDescriptionText = Styled.p`
font-weight: 700,
font-size: 1rem
`;
export default ({
  image,
  cardImageHeight,
  marginBottom,
  borderRadius,
  text,
  h1,
  chat,
  name,
  job,
  heading,
}) =>
  // eslint-disable-next-line no-nested-ternary
  chat ? (
    <Card>
      <Card.Content>
        <div className="flex-card">
          <Image floated="left" size="mini" src={image} />

          <Card.Description>
            <CardDescriptionText>{name}</CardDescriptionText>I am looking for
            designer
          </Card.Description>
          <Card.Meta>sunday</Card.Meta>
        </div>
        <div className="status" />
      </Card.Content>
    </Card>
  ) : job ? (
    <Card>
      <Card.Content>
        <div className="job-card">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={4}>
                <img src={image} alt="icoo" />
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="company-info">
                  <h3>{heading}</h3>
                  <p className="position">Ux Designer,Google Pay</p>
                  <div className="location">
                    <div className="">
                      <i className="fas fa-map-marker-alt" />
                      Location
                    </div>
                    <div>
                      <i className="far fa-eye" />
                      240 Views
                    </div>
                  </div>
                  <div className="job-list">
                    <ul>
                      <li>Today</li>
                      <li>Full Time</li>

                      <li>Applieed</li>
                    </ul>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="flex-end">
                  <i className="fas fa-archive" />
                  <i className="fas fa-info-circle" />
                </div>
                <div className="team">
                  <h5>team</h5>
                  <p>Product and Design</p>
                  <p>120k</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Card.Content>
    </Card>
  ) : (
    <CardContainer>
      <CardImageContainer>
        <CardImage
          image={image}
          cardImageHeight={cardImageHeight}
          marginBottom={marginBottom}
          borderRadius={borderRadius}
        />
      </CardImageContainer>
      {h1 && <CardHead>{text}</CardHead>}
    </CardContainer>
  );
