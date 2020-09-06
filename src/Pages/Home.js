import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import Signup from "./Signup";

class Home extends Component {
  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/dashboard" />;

    return (
      <div className="container-fluid appContainer">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className=" mt-3">
              <h3 className="font-weight-bolder display-5">
                WELCOME TO OUR EVERYDAY SUSU APP, THE BEST FREE SUSU APP
              </h3>
              <h4 className="font-weight-bold">
                LETS CHANGE THE OLD METHOD OF SUSU SAVING
              </h4>
              <h4> GET STARTED FOR FREE </h4>
            </div>
            <div>
              <Link to="/login">
                <button
                  type="submit"
                  className="btn btn-primary navTabsBtnlogin homeBtnstart "
                >
                  Login
                </button>
              </Link>
              <Link to="/signup" className="ml-2">
                <button
                  type="submit"
                  className="btn btn-primary navTabsBtnlogin homeBtnstart "
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-right">
            <img
              src={require("../Images/sus.jpeg")}
              alt="covid"
              id="savto"
              className="d-none d-md-block savto"
            />
            {/* <Signup /> */}
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

export default connect(mStp)(Home);
