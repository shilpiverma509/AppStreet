import React from "react";
import { Segment } from "semantic-ui-react";

const Footer = () => (
  <Segment clearing className="ui sticky">
    <div className="ui horizontal divided list">
      <div className="item">
        <div className="content">
          <div>About</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div>Contact</div>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <div>Privacy Policy</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div>Return Policy</div>
        </div>
      </div>
    </div>
  </Segment>
);

export default Footer;
