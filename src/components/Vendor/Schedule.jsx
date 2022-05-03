import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { Container, Button, Input, Grid } from "semantic-ui-react";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../Navbar";
import CommonModal from "../Common/CommonModal";

const locales = {
  // eslint-disable-next-line global-require
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default () => {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("teamexcel", e.target.files[0]);
  };
  return (
    <Navbar>
      <Container>
        <div className="mt-2">
          <div className="space-div">
            <h3> Schedule</h3>
            <Button
              className="ui primary button btn-upgrade"
              onClick={() => setOpen(!open)}
            >
              Create Schedule
            </Button>
          </div>
          <Calendar
            className="mt-2"
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </Container>
      <CommonModal
        open={open}
        onClose={() => setOpen(!open)}
        classNames={{ modal: "signup-modal" }}
      >
        <h4 className="mt-2">Meeting Schedule</h4>

        <div className="sceduled-form">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                {" "}
                <label>Meeting Purpose</label>
                <Input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                />
                <label>Date</label>
                <Input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                />
                <label>Invite</label>
                <Input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                {" "}
                <label>Time</label>
                <Input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                />
                <label>Type</label>
                <Input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </CommonModal>
    </Navbar>
  );
};
