import React, { useState } from "react";

import {
  Input,
  Container,
  Card,
  Button,
  Grid,
  GridColumn,
  Dropdown,
} from "semantic-ui-react";
import CommonModal from "../../Common/CommonModal";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
];
export default () => {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("teamexcel", e.target.files[0]);
  };
  return (
    <Container>
      <div className="mt-2 address-tab">
        <Card>
          <div className="department">
            {" "}
            <h4>Company Info</h4>
            <Button primary onClick={() => setOpen(!open)}>
              Add Company
            </Button>
          </div>

          <div className="department">
            <div>Shilshatech</div>
            <div>
              {" "}
              Primary <i class="fas fa-check"></i>
            </div>
          </div>
          <div className="department">
            <div>INfotech</div>
            <div> SEt as parent company</div>
          </div>
        </Card>
      </div>
      <CommonModal
        open={open}
        onClose={() => setOpen(!open)}
        classNames={{ modal: "signup-modal " }}
      >
        <div className="compny-detil">
          <h5>Company Details</h5>
          <Dropdown
            placeholder="Company Type"
            fluid
            selection
            options={friendOptions}
            className="drop"
          />
          <Grid columns={2}>
            <Grid.Row>
              <GridColumn>
                {" "}
                <div className="input-container">
                  <label>Registered Company Name</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
                <div className="input-container">
                  <label>Brand Name</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
              </GridColumn>
              <GridColumn>
                {" "}
                <div className="input-container">
                  <label>Website</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
                <div className="input-container">
                  <label>Domain Name</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
              </GridColumn>
            </Grid.Row>
          </Grid>
          <Grid columns={3} className="mt-2">
            <Grid.Row>
              <GridColumn>
                {" "}
                <div className="input-container">
                  <label>Facebook</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
              </GridColumn>
              <GridColumn>
                {" "}
                <div className="input-container">
                  <label>LInkdin</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
              </GridColumn>
              <GridColumn>
                {" "}
                <div className="input-container">
                  <label>TWitter</label>
                  <Input name="email" placeholder="" type="email" />
                </div>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </div>
      </CommonModal>
    </Container>
  );
};
