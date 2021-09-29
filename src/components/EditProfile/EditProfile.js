import React, { Component } from "react";
import {
  email,
} from "redux-form-validators";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions/Auth";

import "./EditProfile.css";
import RenderField from "../RenderField/RenderField";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ProfilePic from '../../assets/ProfilePic.svg';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureUrl: ProfilePic,
    }

    this.uploadInput = React.createRef();
  }
  onSubmit = (formValues) => {
    this.props.EditProfile(formValues);
  };

  clearErrorState = () => {
    this.props.resetPreviousError();
  }

  renderLocationOption() {
    const location = [{ id: 1, area: 'Ahmedabad' }, { id: 2, area: 'Mumbai' }, { id: 3, area: 'Chennai' }];
    return location.map((x) => {
      return (
        <option key={x.id} value={x.id}>
          {x.area}
        </option>
      );
    });
  }

  renderLocationSelect() {
    return (
      <div style={{ padding: '10px 0' }}>
        <label>Location</label>
        <br />
        <Field className='edit-profile-input' name="LocationId" component="select">
          {this.renderLocationOption()}
        </Field>
      </div>
    );
  }

  handlePictureSelected = (event) => {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);
    this.setState({
      pictureUrl: src,
    })
  }

  uploadProfile = () => {
    this.uploadInput.current.click();
  }

  removeProfile = () => {
      this.setState({
        pictureUrl: null,
      })
  }

  render() {
    const { handleSubmit } = this.props;
    const isAnyError = !!(this.props.errorMessage || this.props.emailVerfiyError)

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }} className="container">
        <div className="profile-pic-button-container">
          <img width="280px" height="280px" style={{ borderRadius: '140px' }} src={this.state.pictureUrl} />
          <div className="Button-wrapper">
            <button style={{ width: '95px', height: '40px' }} className="btn btn-dark" onClick={this.removeProfile} >Remove</button>
            <button style={{ width: '95px', height: '40px' }} className="btn btn-dark" onClick={this.uploadProfile}>Upload</button>              
            <input ref={this.uploadInput} type="file" style={{ display: 'none' }}
            onChange={this.handlePictureSelected}
            />  
          </div>
        </div>
        <div>
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="row justify-content-between">
                <Field
                  name="First Name"
                  type="text"
                  label="First Name"
                  className="edit-profile-input"
                  component={RenderField}
                  // validate={[required(), length({ min: 2 })]}
                />
                <Field
                  name="Last Name"
                  type="text"
                  label="Last Name"
                  className="edit-profile-input"
                  component={RenderField}
                  // validate={[required()]}
                />
              </div>
              <div className="row justify-content-between">
                {this.renderLocationSelect()}
                <Field
                  name="Username"
                  type="text"
                  className="edit-profile-input"
                  label="Username"
                  component={RenderField}
                  validate={[email()]}
                />
              </div>
              <div className="row justify-content-between">
                <Field
                  name="Description"
                  label="Description"
                  className="description-field"
                  component={RenderField}
                  // validate={[required()]}
                />
              </div>
              <div className="Button-wrapper">
                <button style={{ marginRight: '25px' }} className="btn btn-dark save-cancel-button">Cancel</button>
                <button className="save-cancel-button" >Save</button>
              </div>
            </form>
          </div>
        </div>
        {/* <ErrorMessage
          open={isAnyError}
          errorMessage={this.props.errorMessage || this.props.emailVerfiyError}
          clearErrorState={this.clearErrorState}
        /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    emailVerfiyError: state.auth.emailVerifyError,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: "EditProfileForm",
  })
)(EditProfile);
