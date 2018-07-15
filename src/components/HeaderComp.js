import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderComp = () => (
  <div className="topNav" id="myTopNav">
    <Link className="navlink" to="/" className="active">
      Home
    </Link>
    <Link className="navlink" to="/about" className="active">
      About
    </Link>
    <Link className="navlink" to="/contact" className="active">
      Contact
    </Link>
    <Link className="navlink" to="/bag" className="active">
      Bag
    </Link>
    <Link className="navlink" to="#">
      <i class="bars icon" />
    </Link>
  </div>
);

export default HeaderComp;

/*
<Segment clearing>
    <Header className="header-name" floated="left">
      MY AWESOME SHOP
    </Header>
    <Header as="h2" floated="right">
      <div className="ui horizontal divided list">
        <div className="item">
          <div className="content">
            <Link to="/">Home</Link>
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
  */
