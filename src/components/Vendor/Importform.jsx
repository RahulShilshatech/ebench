import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { toast } from "react-semantic-toasts";
import CommonModal from "../Common/CommonModal";
import { importTeam, getTeams } from "../../redux/actions/teamAction";

export default ({ open, onClose }) => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("teamexcel", e.target.files[0]);
    setData(formData);
  };
  const handleSubmit = async () => {
    const res = await dispatch(importTeam(data));
    if (res.is_success) {
      toast({
        type: "success",
        icon: "smile outline",
        title: "Teams Added Successfully",
        description: `${res.message}`,
      });
      onClose();
      await dispatch(getTeams());
    } else {
      toast({
        type: "error",
        icon: "shutdown",
        title: "Teams Adding Failure",
        description: `${res.message}`,
      });
    }
  };
  return (
    <>
      <CommonModal
        open={open}
        onClose={onClose}
        classNames={{ modal: "signup-modal" }}
      >
        <h1>eBench</h1>
        <h3>Add Excel File</h3>

        <div className="import-form">
          <Input
            type="file"
            className="file-input"
            name="teamexcel"
            onChange={handleChange}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="signup-button"
              onClick={() => handleSubmit()}
            >
              Import Team
            </button>
          </div>
        </div>
      </CommonModal>
    </>
  );
};
