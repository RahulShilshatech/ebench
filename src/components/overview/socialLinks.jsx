import React from "react";
import { List, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { EditState } from "../../redux/actions/editAction";
import EditInput from "../Common/editinput";

export default () => {
  const dispatch = useDispatch();

  const { editState } = useSelector((state) => state.editor);
  return (
    <div className="">
      <List className="personal">
        <List.Item>
          <div className="personal-detail">
            <div className="div-flex">
              <label>Resume</label>
              {editState?.edit && editState?.name === "Resume" ? (
                <EditInput value="Download" />
              ) : (
                <h4 onClick={() => dispatch(EditState("Resume"))}>Download</h4>
              )}
            </div>
            <Divider />
          </div>
        </List.Item>
        <List.Item>
          <div className="personal-detail">
            <div className="div-flex">
              <label>Skype Id</label>
              {editState?.edit && editState?.name === "skype" ? (
                <EditInput value="jackon234@gmail.com" />
              ) : (
                <h4 onClick={() => dispatch(EditState("skype"))}>
                  jackon234@gmail.com
                </h4>
              )}
            </div>
            <Divider />
          </div>
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label>Whats app </label>
            {editState?.edit && editState?.name === "mobile" ? (
              <EditInput value="+987878787" />
            ) : (
              <h4 onClick={() => dispatch(EditState("mobile"))}> +987878787</h4>
            )}
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label>Country </label>
            {editState?.edit && editState?.name === "country" ? (
              <EditInput value="India" />
            ) : (
              <h4 onClick={() => dispatch(EditState("country"))}> India</h4>
            )}
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label className="pl-2">State </label>
            {editState?.edit && editState?.name === "State" ? (
              <EditInput value="Punjab" />
            ) : (
              <h4 onClick={() => dispatch(EditState("State"))}> Punjab</h4>
            )}
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label className="pl-3">City </label>
            {editState?.edit && editState?.name === "City" ? (
              <EditInput value="Chandigarh" />
            ) : (
              <h4 onClick={() => dispatch(EditState("City"))}> Chandigarh</h4>
            )}
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label>Pincode </label>
            {editState?.edit && editState?.name === "Pincode" ? (
              <EditInput value="128595" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Pincode"))}> 128595</h4>
            )}
          </div>
          <Divider />
        </List.Item>
        <List.Item>
          <div className="div-flex">
            <label>Hobby </label>
            {editState?.edit && editState?.name === "Hobby" ? (
              <EditInput value="dance,cricket" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Hobby"))}>
                {" "}
                dance,cricket
              </h4>
            )}
          </div>
        </List.Item>
        <Divider />
        <List.Item>
          <div className="div-flex">
            <label>Interest </label>
            {editState?.edit && editState?.name === "Interest" ? (
              <EditInput value="AI" />
            ) : (
              <h4 onClick={() => dispatch(EditState("Interest"))}> AI</h4>
            )}
          </div>
        </List.Item>
      </List>
    </div>
  );
};
