import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/toggleRegister";
import LogoIcon from "../Logo/LogoIcon/LogoIcon";
import PersonalRegister from "../PersonalRegister/PersonalRegister";
import OrgRegister from "../OrgRegister/OrgRegister";

import "./Register.css";

class Register extends Component {
  state = {};
  render() {
    const {
      toggleOrganization,
      togglePersonal,
      isPersonalOpen,
      isOrganizationOpen,
    } = this.props;

    return (
      <div className="register">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="justify-content-center">
            <LogoIcon />
            <h1>Create a new Account</h1>
            <p>The Hero is in you</p>
          </div>
          <div className="container row justify-content-center ">
            <div className="menu">
              <div
                className={`items  ${isPersonalOpen ? "actived" : " "}`}
                onClick={togglePersonal}
              >
                Personal
              </div>
              <div
                className={`items  ${isOrganizationOpen ? "actived" : " "}`}
                onClick={toggleOrganization}
              >
                Organization
              </div>
            </div>
          </div>
          <div>
            {isPersonalOpen ? <PersonalRegister /> : ""}
            {isOrganizationOpen ? <OrgRegister /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPersonalOpen: state.toggle.isPersonalOpen,
    isOrganizationOpen: state.toggle.isOrganizationOpen,
  };
};
export default connect(mapStateToProps, actions)(Register);
