import React from "react";
import { Card, Button, Input } from "semantic-ui-react";
import { useState } from "react";

export default () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="address-tab">
        <Card>
          <h3>Announcement</h3>
        </Card>
        <Card>
          <div className="padd-2">
            <i class="fas fa-exclamation-circle"></i> Post an Announcement
          </div>
        </Card>
        <Card>
          <h3>Live Announcement</h3>
          <p className="text-center">No announcement active</p>
        </Card>
      </div>
    </>
  );
};
