import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./statics/scss/index.sass";

import { Provider } from "react-redux";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ManageAdvertise from "./components/ManageAdvertise.jsx";
import Manageuser from "./components/Manageuser.jsx";
import { SignUp } from "./components/UserAuth/signUp";
import { Login } from "./components/UserAuth/signIn";
import Vendor from "./components/Vendor/index.jsx";
import VendorAdvertise from "./components/Vendor/VendorAdvertise.jsx";
import adminuser from "./components/Admin/adminuser.jsx";
import VendorList from "./components/VendorList.jsx";
import Landing from "./components/Landing/index.jsx";
import store from "./redux/store.js";
import VendorPrivateRoute from "./components/Common/VendorPrivateRoute.jsx";
import UserPrivateRoute from "./components/Common/UserPrivateRoute.jsx";
import AdminPrivateRoute from "./components/Common/AdminPrivateRoute.jsx";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import AdminLogin from "./components/User/AdminLogin.jsx";
import Message from "./components/Common/Message.jsx";
import Jobs from "./components/Common/Jobs.jsx";
import Income from "./components/Income";
import Subscription from "./components/Subscription";
import Task from "./components/Task";
import TaskHistory from "./components/TaskHistory";
import RaiseInvoice from "./components/RaiseInvoice";
import ProjectDetail from "./components/Candidate/ProjectDetail";

import ProfileHistory from "./components/User/ProfileHistory";
import ManageHistory from "./components/Vendor/ManageHistory";
import ManageInterview from "./components/Vendor/ManageInterview";
import ManageTask from "./components/Vendor/ManageTask";
import ManageJob from "./components/Vendor/ManageJob";
import ManagePO from "./components/Vendor/ManagePO";
import Schedule from "./components/Vendor/Schedule";
import MyCalendar from "./components/Vendor/Schedule";
import CreateGroup from "./components/Vendor/CreateGroup";
import GroupHistory from "./components/Vendor/GroupHistory";
import ManageProfile from "./components/Vendor/ManageProfile";
import ManageRequirter from "./components/ManageRequirter";
import ManageManager from "./components/ManageManager";
import VendorInvoice from "./components/Vendor/vendorInvoice";
import VendorCost from "./components/Vendor/VendorCost";
import AccountMnager from "./components/Vendor/AccountMnager";
import ManageSubscribe from "./components/ManageSubscribe";
import CompanyProfile from "./components/Vendor/CompanyProfile";
import VendorPermission from "./components/Vendor/VendorPermission";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          
          <Route path="/landing" exact component={Landing} />
          <Route path="/adminLogin" exact component={AdminLogin} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/task" exact components={Task}/>
        
          <VendorPrivateRoute path="/v-dasbhoard" exact component={Vendor} />
          <VendorPrivateRoute
            path="/v-advertisment"
            exact
            component={VendorAdvertise}
          />
          <VendorPrivateRoute
            path="/manageadvertise"
            exact
            component={ManageAdvertise}
          />
          <AdminPrivateRoute path="/manage-user" exact component={Manageuser} />
          <AdminPrivateRoute path="/adminuser" exact component={adminuser} />
          <AdminPrivateRoute path="/vendorlist" exact component={VendorList} />
          <AdminPrivateRoute
            path="/v-advertise"
            exact
            component={VendorAdvertise}
          />

          <AdminPrivateRoute
            path="/managerequiter"
            exact
            component={ManageRequirter}
          />
          <AdminPrivateRoute
            path="/managemanager"
            exact
            component={ManageManager}
          />
          <AdminPrivateRoute
            path="/managesubscribe"
            exact
            component={ManageSubscribe}
          />

          <UserPrivateRoute path="/message" exact component={Message} />
          <UserPrivateRoute path="/jobs" exact component={Jobs} />
          <UserPrivateRoute path="/income" exact component={Income} />
          <UserPrivateRoute path="/subscribe" exact component={Subscription} />
           <UserPrivateRoute path="/task" exact component={Task} /> 
          <UserPrivateRoute path="/taskhistory" exact component={TaskHistory} />
          <UserPrivateRoute
            path="/raiseinvoice"
            exact
            component={RaiseInvoice}
          />
          <UserPrivateRoute
            path="/projectdetail"
            exact
            component={ProjectDetail}
          />
          <UserPrivateRoute
            path="/profilehistory"
            exact
            component={ProfileHistory}
          />
          <VendorPrivateRoute
            path="/v-history"
            exact
            component={ManageHistory}
          />
          <VendorPrivateRoute
            path="/manageinterview"
            exact
            component={ManageInterview}
          />
          <VendorPrivateRoute path="/managetask" exact component={ManageTask} />
          <VendorPrivateRoute path="/v-jobs" exact component={ManageJob} />
          <VendorPrivateRoute path="/v-chat" exact component={Message} />
          <VendorPrivateRoute
            path="/v-subscribe"
            exact
            component={Subscription}
          />
          <VendorPrivateRoute path="/v-revenue" exact component={Income} />
          <VendorPrivateRoute
            path="/purchaseorder"
            exact
            component={ManagePO}
          />
          {/* <VendorPrivateRoute path="/schedule" exact component={Schedule} /> */}
          <VendorPrivateRoute path="/schedule" exact component={MyCalendar} />
          <VendorPrivateRoute path="/group" exact component={CreateGroup} />
          <VendorPrivateRoute
            path="/grouphistory"
            exact
            component={GroupHistory}
          />
          <VendorPrivateRoute
            path="/manageprofile"
            exact
            component={ManageProfile}
          />
          <VendorPrivateRoute
            path="/manageprofile"
            exact
            component={ManageProfile}
          />
          <VendorPrivateRoute
            path="/v-invoice"
            exact
            component={VendorInvoice}
          />
          <VendorPrivateRoute path="/v-costing" exact component={VendorCost} />

          <VendorPrivateRoute path="/v-task" exact component={AccountMnager} />
          <VendorPrivateRoute
            path="/v-projectdetail"
            exact
            component={ProjectDetail}
          />
          <VendorPrivateRoute
            path="/v-project"
            exact
            component={ProjectDetail}
          />
          <VendorPrivateRoute
            path="/compnyprofile"
            exact
            component={CompanyProfile}
          />
          <VendorPrivateRoute
            path="/permission"
            exact
            component={VendorPermission}
          />
          
        </Switch>
      </Router>
      <SemanticToastContainer />
    </Provider>
  );
}

export default App;
