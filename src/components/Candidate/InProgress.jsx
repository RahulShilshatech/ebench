import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="in-progress">
      <div className="c-flex">
        <div>
          <div className="inner-content">
            <img
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg"
              alt="asc"
            />
            <p>Google Inc</p>
          </div>
        </div>
        <div className="income">
          <p>$272,234</p>
          <span className="block-content">23, June</span>
        </div>
        <Link to="/raiseinvoice">
          <Button className="raise-btn" content="Raise Invoice" primary />
        </Link>
      </div>
      <div className="c-flex">
        <div>
          <div className="inner-content">
            <img
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg"
              alt="asc"
            />
            <p>Google Inc</p>
          </div>
        </div>
        <div className="income">
          <p>$272,234</p>
          <span className="block-content">23, June</span>
        </div>
        <Link to="/raiseinvoice">
          <Button className="raise-btn" content="Raise Invoice" primary />
        </Link>
      </div>
      <div className="c-flex">
        <div>
          <div className="inner-content">
            <img
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg"
              alt="asc"
            />
            <p>Google Inc</p>
          </div>
        </div>
        <div className="income">
          <p>$272,234</p>
          <span className="block-content">23, June</span>
        </div>
        <Link to="/raiseinvoice">
          <Button className="raise-btn" content="Raise Invoice" primary />
        </Link>
      </div>
    </div>
  );
};
