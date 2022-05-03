import React from "react";
import { List, Container } from "semantic-ui-react";
import Listing from "../Common/list";
import {
  BlockChainConst,
  ContentMagmentConst,
  BackendConst,
  FrontendConst,
  MobilityConst,
} from "../../utils/constants";

export default () => (
  <>
    <div className="skill-section">
      <Container>
        <div className="text-center">
          <h3>Browse By Skills</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
        <div className="mobility">
          <h3 className="text-center">Mobility</h3>
          <List>
            {MobilityConst.map((bchain) => (
              <Listing>
                <img src={bchain.url} alt="ico" />
              </Listing>
            ))}
          </List>
        </div>
        <div className="mobility">
          <h3 className="text-center">FrontEnd & Fullstack</h3>
          <List>
            {FrontendConst.map((bchain) => (
              <Listing>
                <img src={bchain.url} alt="ico" />
              </Listing>
            ))}
          </List>
        </div>
        <div className="mobility">
          <h3 className="text-center">Backend</h3>
          <List>
            {BackendConst.map((bchain) => (
              <Listing>
                <img src={bchain.url} alt="ico" />
              </Listing>
            ))}
          </List>
        </div>
        <div className="mobility">
          <h3 className="text-center">Content Management</h3>
          <List>
            {ContentMagmentConst.map((bchain) => (
              <Listing>
                <img src={bchain.url} alt="ico" />
              </Listing>
            ))}
          </List>
        </div>
        <div className="mobility">
          <h3 className="text-center">Blockchain & ML</h3>
          <List>
            {BlockChainConst.map((bchain) => (
              <Listing>
                <img src={bchain.url} alt="ico" />
              </Listing>
            ))}
          </List>
        </div>
      </Container>
    </div>
  </>
);
