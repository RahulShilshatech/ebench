import React from "react";
import { Grid, Card } from "semantic-ui-react";

export default ({ gridColumns, dataArray, icon }) => (
  <>
    <Grid>
      <Grid.Row columns={gridColumns}>
        {dataArray.map((data) => (
          <Grid.Column>
            <Card>
              <Card.Content>
                {icon ? (
                  <i className={data.icon} />
                ) : (
                  <img src={data.image} alt="icoo" />
                )}

                <Card.Header>{data.header}</Card.Header>
                <Card.Meta>{data.description}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </>
);
