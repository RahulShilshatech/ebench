import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { currentUserDetail } from "../redux/actions/userAction";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    async function getCurrentUser() {
      await dispatch(currentUserDetail());
    }
    getCurrentUser();
  }, []);
  return (
    <>
      <Navbar>
        <Sidebar user={user?.currentUser?.data}>
          <Overview />
        </Sidebar>
      </Navbar>
    </>
  );
};
