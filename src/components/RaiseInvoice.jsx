import React from "react";
import { Container, Search, Select, Button } from "semantic-ui-react";
import CommonTabs from "./Common/Tabs";
import Invoice from "./Invoice/Invoice";
import Due from "./Invoice/Due";

import Received from "./Invoice/Received";

import Navbar from "./Navbar";

const TabsContent = [
  {
    menuItem: "Raise Invoice",
    render: () => <Invoice />,
  },
  {
    menuItem: "Due Invoice",
    render: () => <Due />,
  },
  {
    menuItem: "Received Invoice",
    render: () => <Received />,
  },
];

export default () => {
  return (
    <Navbar>
      <Container className="invoice">
        <div className="btn-flex">
          <Search value="search" className="serch-invoice" />

          <div>
            {" "}
            <Button basic color="yellow">
              Upload Invoice
            </Button>
            <Button basic color="olive">
              Send Invoice
            </Button>
            <Button basic color="green">
              Send Reminder
            </Button>
          </div>
        </div>
        <div className="tags">
          <Select placeholder="date" />
          <Select placeholder="Name" />
          <Select placeholder="Technology" />
          <Select placeholder="Amount" />
        </div>
        <div className="invoice">
          <CommonTabs
            menu={{
              secondary: true,
              borderless: true,
              attached: false,
              tabular: false,
            }}
            panes={TabsContent}
          />
        </div>
      </Container>
    </Navbar>
  );
};
