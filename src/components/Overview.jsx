import React from "react";
import { Grid, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonTabs from "./Common/Tabs";
import SocialLinks from "./overview/socialLinks";
import { EditState } from "../redux/actions/editAction";
import EditInput from "./Common/editinput";
import Education from "./overview/education";
import Skills from "./overview/skills";
import EmployeHistory from "./overview/employehistory";

const TabsContents = [
  {
    menuItem: "Personal",
    render: () => <SocialLinks />,
  },
  {
    menuItem: "Education",
    render: () => <Education />,
  },
  {
    menuItem: "Skills",
    render: () => <Skills />,
  },
  {
    menuItem: "Employment History",
    render: () => <EmployeHistory />,
  },
];

export default () => {
  const dispatch = useDispatch();
  const { editState } = useSelector((state) => state.editor);
  return (
    <>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <div className="overview">
              <div className="flex-div">
                <div>
                  <h2>Overview</h2>
                </div>

                <div>
                  <i
                   className="fas fa-pen"   
                    onClick={() =>
                      editState?.name === "overview"
                        ? dispatch(EditState(null))
                        : dispatch(EditState("overview"))
                    }
                  />
                </div>
              </div>
              <Divider />
              {editState?.edit && editState?.name === "overview" ? (
                <EditInput
                  type="textarea"
                  value="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                />
              ) : (
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              )}
            </div>
            <Grid className="top-crd" divided="vertically">
              <Grid.Row columns={2} className="links">
                <Grid.Column>
                  {" "}
                  <Link to="/task">
                    <div className="stats">
                      <div className="stats-content">
                        <i class="fas fa-tasks"></i>
                        <div>
                          <p> Pending Task</p>
                          <p className="text-bigger">Ui Design</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  {" "}
                  <Link to="/task">
                    <div className="stats">
                      <div className="stats-content">
                        <i class="fas fa-tasks"></i>
                        <div>
                          <p> Current Task</p>
                          <p className="text-bigger">web design</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="profile-history">
              <CommonTabs menu={{ secondary: true }} panes={TabsContents} />
            </div>
          </Grid.Column>
          
          <Grid.Column width={6} className="links">
            <Link to="/income">
              <div className="stats">
                <div className="stats-content">
                  <i class="fas fa-hand-holding-usd"></i>
                  <div>
                    <p>Payment </p>
                    <p className="text-bigger">$ 4294</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/taskhistory">
              <div className="stats">
                <div className="stats-content">
                  <i class="fas fa-tasks"></i>
                  <div>
                    <p>Task History</p>
                    <p className="text-bigger">26 C</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/message">
              <div className="stats">
                <div className="stats-content">
                  <i className="fas fa-envelope" />

                  <div>
                    <p>
                      <a href="/message">New Messages</a>
                    </p>
                    <p className="text-bigger">260</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/jobs">
              <div className="stats">
                <div className="stats-content">
                  <i className="fas fa-shield-alt" />
                  <div style={{}}>
                    <p>Jobs</p>
                    <p className="text-bigger">
                      <i class="fas fa-bell">Job request</i>
                      <i class="fas fa-folder-plus">New jobs</i>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="experience">
              <div className="flex-div">
                <div>
                  <h3>
                    <i className="fas fa-graduation-cap" /> key Experience
                  </h3>
                </div>

                <div>
                  <i
                    className="fas fa-pen"
                    onClick={() =>
                      editState?.name === "exp"
                        ? dispatch(EditState(null))
                        : dispatch(EditState("exp"))
                    }
                  />
                </div>
              </div>
              <Divider />
              <div className="inner-content">
                <p>Currently</p>
                {editState?.edit && editState?.name === "exp" ? (
                  <EditInput value="Abode Inc. (Since Jul-2017)" />
                ) : (
                  <p>Abode Inc. (Since Jul-2017)</p>
                )}
              </div>

              <div className="inner-content">
                <p>Current Designation</p>
                {editState?.edit && editState?.name === "exp" ? (
                  <EditInput value="Resource Manager" />
                ) : (
                  <p>Resource Manager</p>
                )}
              </div>
              <div className="inner-content">
                <p>Job Profile</p>
                {editState?.edit && editState?.name === "exp" ? (
                  <EditInput value="Recruitment & PR" />
                ) : (
                  <p>Recruitment & PR</p>
                )}
              </div>
              <div className="inner-content">
                <p>Role in Hiring</p>
                {editState?.edit && editState?.name === "exp" ? (
                  <EditInput value="Hiring Manager" />
                ) : (
                  <p>Hiring Manager</p>
                )}
              </div>
            </div>
            <div className="skills">
              <div className="flex-div">
                <div>
                  <h3>Skills</h3>
                </div>

                <div>
                  <i className="fas fa-pen" />
                </div>
              </div>
              <Divider />
              <p className="text-samll">
                Recruiters last searched & viewed your profile using these
                keywords.
              </p>
              <div className="tag">
                <div className="tag-content">Marketing</div>
                <div className="tag-content">Sales</div>
                <div className="tag-content">Advertise</div>
              </div>
              <div className="tag">
                <div className="tag-content">Hr</div>
                <div className="tag-content">Marketing</div>
                <div className="tag-content">MR</div>
              </div>
              <div className="tag">
                <div className="tag-content">Marketing</div>
                <div className="tag-content">Marketing</div>
                <div className="tag-content">Marketing</div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
