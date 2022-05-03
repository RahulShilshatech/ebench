import React from "react";
import { List, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { EditState } from "../../redux/actions/editAction";
import EditInput from "../Common/editinput";

export default () => {
  const dispatch = useDispatch();

  const { editState } = useSelector((state) => state.editor);
  return (
    <List className="skill">
      <List.Item>
        <div className="div-flex">
          <div>
            {" "}
            <p className="text-muted">2015-present</p>
            <h3>Product Designer</h3>
            <p>5 years</p>
          </div>
          <div>
            {editState?.edit && editState?.name === "Product Designer" ? (
              <EditInput value="Google" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Product Designer"))}>
                Google
              </h4>
            )}
          </div>
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <div>
            {" "}
            <p className="text-muted">2015-present</p>
            <h3>Web Designer</h3>
            <p>7 years</p>
          </div>
          <div>
            {editState?.edit && editState?.name === "Web Designer" ? (
              <EditInput value="Mad Tech Geeks" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Web Designer"))}>
                Mad Tech Geeks
              </h4>
            )}
          </div>
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <div>
            {" "}
            <p className="text-muted">2015-present</p>
            <h3>Front End Developer</h3>
            <p>4 years</p>
          </div>
          <div>
            {editState?.edit && editState?.name === "Front End Developer" ? (
              <EditInput value="  Microsoft" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Front End Developer"))}>
                Microsoft
              </h4>
            )}
          </div>
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <div>
            {" "}
            <p className="text-muted">2015-present</p>
            <h3>Project Manager</h3>
            <p>9 years</p>
          </div>
          <div>
            {editState?.edit && editState?.name === "Project Manager" ? (
              <EditInput value="   Infotech" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Project Manager"))}>
                Infotech
              </h4>
            )}
          </div>
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <div>
            {" "}
            <p className="text-muted">2015-present</p>
            <h3>Resume</h3>
            <p>4 years</p>
          </div>
          <div>
            {editState?.edit && editState?.name === "Resume" ? (
              <EditInput value=" Download" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Resume"))}>Infotech</h4>
            )}
          </div>
        </div>
        <Divider />
      </List.Item>
    </List>
  );
};
