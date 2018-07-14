import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderComp = () => (
  <Segment clearing>
    <Header className="header-name" floated="left">
      MY AWESOME SHOP
    </Header>
    <Header as="h2" floated="right">
      <div className="ui horizontal divided list">
        <div className="item">
          <div className="content">
            <div className="header">Home</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">About</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">Contact</div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <div className="header">Bag</div>
          </div>
        </div>
      </div>
    </Header>
  </Segment>
);

export default HeaderComp;
