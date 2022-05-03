import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "../Navbar";

import CommonTabs from "../Common/Tabs";

import Overview from "./ProfileTabs/Overview";
import Adress from "./ProfileTabs/Adress";
import Department from "./ProfileTabs/Department";
import Designation from "./ProfileTabs/Designation";
import Announcement from "./ProfileTabs/Announcement";
import Policies from "./ProfileTabs/Policies";
import Ceo from "./ProfileTabs/Ceo";
import Statutory from "./ProfileTabs/Statutory";
import MyPlan from "./ProfileTabs/MyPlan";
import MyCompany from "./ProfileTabs/MyCompany";

const TabsContent = [
  {
    menuItem: "Overview",
    render: () => <Overview />,
  },
  {
    menuItem: "Address",
    render: () => <Adress />,
  },
  {
    menuItem: "Department",
    render: () => <Department />,
  },
  {
    menuItem: "Designation",
    render: () => <Designation />,
  },
  {
    menuItem: "Announcement",
    render: () => <Announcement />,
  },
  {
    menuItem: "Policies",
    render: () => <Policies />,
  },
  {
    menuItem: "Ceo",
    render: () => <Ceo />,
  },
  {
    menuItem: "Statutory",
    render: () => <Statutory />,
  },
  {
    menuItem: "My Plan",
    render: () => <MyPlan />,
  },
  {
    menuItem: "My Companies",
    render: () => <MyCompany />,
  },
];

export default () => {
  return (
    <Navbar>
      <Container>
        <div className="mt-2">
          <CommonTabs
            menu={{ secondary: true, pointing: true }}
            panes={TabsContent}
          />
        </div>
      </Container>
    </Navbar>
  );
};
