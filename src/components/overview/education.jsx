import React from "react";
import { List, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { EditState } from "../../redux/actions/editAction";
import EditInput from "../Common/editinput";

export default () => {
  const dispatch = useDispatch();

  const { editState } = useSelector((state) => state.editor);
  return (
    <List className="education">
      <List.Item>
        <div className="div-flex">
          <label>Intermediate </label>
          {editState?.edit && editState?.name === "Intermediate" ? (
            <EditInput value="2012-2016" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Intermediate"))}>
              2012-2016
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <label>Graduation </label>
          {editState?.edit && editState?.name === "Graduation" ? (
            <EditInput value="Graduation" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Graduation"))}>
              Graduation
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <label>Post Graduation </label>
          {editState?.edit && editState?.name === "Post Graduation" ? (
            <EditInput value="2012-2016" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Post Graduation"))}>
              2012-2016
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <label>Certification </label>
          {editState?.edit && editState?.name === "Certification" ? (
            <EditInput value="2012-2016" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Certification"))}>
              2012-2016
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <label>Choose Industry </label>
          {editState?.edit && editState?.name === "Choose Industry" ? (
            <EditInput value="University" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Choose Industry"))}>
              University
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
      <List.Item>
        <div className="div-flex">
          <label>Skills Catagory</label>
          {editState?.edit && editState?.name === "Skills Catagory" ? (
            <EditInput value="Html, css" />
          ) : (
            <h4 onClick={() => dispatch(EditState("Skills Catagory"))}>
              Html, css
            </h4>
          )}
        </div>
        <Divider />
      </List.Item>
    </List>
  );
};
