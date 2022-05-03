import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { toast } from "react-semantic-toasts";
import { useDispatch } from "react-redux";
import {
  addAdvertise,
  getAdvertiseList,
} from "../../redux/actions/advertiseAction";
import CommonModal from "../Common/CommonModal";

export default ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    advertiseName: "",
    advertiseCategory: "",
  });
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit() {
    const params = data;
    const res = await dispatch(addAdvertise(params));
    if (res.is_success) {
      toast({
        type: "success",
        icon: "smile outline",
        title: "Advertisment Added Successfully",
        description: `${res.message}`,
      });
      onClose();
      await dispatch(getAdvertiseList());
    } else {
      toast({
        type: "error",
        icon: "shutdown",
        title: "Advertisment Adding Failure",
        description: `${res.message}`,
      });
    }
  }
  return (
    <CommonModal
      open={open}
      onClose={onClose}
      classNames={{ modal: "signup-modal" }}
    >
      <h1>eBench</h1>
      <h3>Add New Advertise</h3>
      <div className="form-container">
        <div className="input-container">
          <label id="name">Advertise Name</label>
          <Input
            name="advertiseName"
            id="name"
            placeholder="Enter your Advertise Name"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Advertise Category</label>
          <Input
            name="advertiseCategory"
            placeholder="Enter your Advertise Category"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="signup-button"
            onClick={() => handleSubmit()}
          >
            Add New Advertise
          </button>
        </div>
      </div>
    </CommonModal>
  );
};
