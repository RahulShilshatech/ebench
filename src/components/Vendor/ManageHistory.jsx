import React from "react";
import { Container, Select } from "semantic-ui-react";
import CommonTabs from "../Common/Tabs";
import Navbar from "../Navbar";
import JobHistory from "./JobHistory";
import MemberHistory from "./MemberHistory";
import PaymentHistory from "./PaymentHistory";

const TabsContent = [
  {
    menuItem: "Job History",
    render: () => <JobHistory />,
  },
  {
    menuItem: "Member History",
    render: () => <MemberHistory />,
  },
  {
    menuItem: "Payment History",
    render: () => <PaymentHistory />,
  },
];
export default () => {
  return (
    <Navbar>
      <Container className="">
        <div className="history-tags">
          <div className="tags">
            <Select placeholder="Posted" />
            <Select placeholder="Expired" />
            <Select placeholder="Active" />
            <Select placeholder="Coming Up" />
          </div>{" "}
        </div>
        <CommonTabs
          menu={{ secondary: true, pointing: true }}
          panes={TabsContent}
        />
      </Container>
    </Navbar>
  );
};
