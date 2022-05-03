import React from "react";
import { Step, Container, Card, Button, Icon } from "semantic-ui-react";
import Navbar from "../Navbar";
import ProfileSidebar from "../Common/ProfileSidebar";

export default () => {
  return (
    <Navbar>
      <ProfileSidebar>
        <div className="education-history ">
          <div className="eduction">
            <h3>Education</h3>
            <p>5 of 12</p>
          </div>
          <div className="edu-info">
            <p>
              Add the schools you attend, area of degrees, and degree earned{" "}
            </p>
            <Button basic className="eduBtn">
              + Add Education
            </Button>
            <p className="text-skip">Skip this text</p>
          </div>
          <div className="edu-step">
            <Button basic className="eduBtn">
              Back
            </Button>
            <Button primary className="nextbtn">
              Next
            </Button>
          </div>
        </div>
      </ProfileSidebar>
    </Navbar>
  );
};
