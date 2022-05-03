import React, { useState } from "react";
import LandingNav from "../LandingNav";
import Area from "./Area";
import Footer from "./Footer";
import CleintDetail from "./CleintDetail";

import SkillSection from "./SkillSection";

import SignUp from "../User/SignUp";
import SignIn from "../User/SignIn";

import HeaderSection from "./HeaderSection";
import SliderPanel from "./SliderPanel";
import HiringSection from "./HiringSection";
import CleintInfo from "./CleintInfo";

export default () => {
  const [signupModal, openSigupModal] = useState(false);
  const [signinModal, openSigninModal] = useState(false);
   
  return (
    <div className="">
      <LandingNav
        signupModal={() => openSigupModal(!signupModal)}
        signinModal={() => openSigninModal(!signinModal)}
      >
        <div className="landing">
          <HeaderSection />
          <SliderPanel />
          <Area />
          <HiringSection />
          <SkillSection />
          <CleintDetail />
          <CleintInfo />
          <Footer />
        </div>

        <SignIn
          open={signinModal}
          onClose={() => openSigninModal(!signinModal)}
        />
      </LandingNav>
    </div>
  );
};
