import React from "react";
import { connect } from "react-redux";
import { register } from "../Redux/Actions/authActions";
//import { addUser } from "../../Redux/Actions/UserActions";
import { Redirect } from "react-router-dom";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
    // document.getElementById("form").reset();
    this.setState({
      email: "",
      password: "",
      fullname: "",
      address: "",
    });
  };
  render() {
    const { uid } = this.props;
    if (uid) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
           
            <h2 className="mt-3 font-weight-bold ">
              ADD AN UNLIMITED SUSU GROUP, COLLECT YOUR MENBERS' CONTRIBUTIONS
              AND ADD PAYMENTS
            </h2>
            <div className="d-none d-md-block">
              <img
                src={require("../Images/savto.jpg")}
                alt="covid"
                id="creditImg"
                className="d-none d-md-block"
              />
            </div>
          </div>
          <div className="col mt-3">
          {/* <div className="d-none d-md-block">
              <img
                src={require("../Images/saving.png")}
                alt="covid"
                id="creditImg"
                className="d-none d-md-block"
              />
            </div> */}
            <form onSubmit={this.handleSubmit} id="form">
              <div className="row text-left">
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label
                    htmlFor="email"
                    className="form-label  font-weight-bold"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control inputsStyle"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control inputsStyle"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row text-left">
                <div className="mb-2">
                  <label
                    htmlFor="fullname"
                    className="form-label  font-weight-bold"
                  >
                    fullname
                  </label>
                  <input
                    type="text"
                    className="form-control inputsStyle"
                    id="fullname"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-2">
                  <label
                    htmlFor="department"
                    className="form-label  font-weight-bold"
                  >
                    Address
                  </label>
                  <input
                    value={this.state.address}
                    onChange={this.handleChange}
                    type="text"
                    id="address"
                    name="address"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="form-group col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-12 col-xxl-12 mb-2 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary navTabsBtn homeBtn "
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  // const profile = state.firebase.profile;
  return {
    uid: uid,
    // profile: profile,
  };
};

export default connect(mStp, { register })(AddUser);
